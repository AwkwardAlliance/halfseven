import { reduce, find } from 'lodash';

export default function combat(util, abilities) {
    const combatTypes = {
        UNARMED: 0,
        MELEE: 1,
        RANGED: 2
    };

    return {
        types: combatTypes,
        attackBonus
    }

    function attackBonus(type, character) {
        const sumOfAttackBonus = util.sumOf('attackBonus');

        const inventoryBonus = c => sumOfAttackBonus(c.inventory);
        const classBonus = c => c.race.getAttackBonus() || 0;
        const featBonus = c => sumOfAttackBonus(c.feats);
        const magicBonus = c => sumOfAttackBonus(c.effectedBy.spells);
        const abilityBonus = c => {
            const hasWeaponFinesse = !!find(c.feats, { name: 'Weapon Finesse' });
            const ability = hasWeaponFinesse || type === combatTypes.RANGED ?
                c.abilities.dexterity :
                c.abilities.strength;
            return abilities.getModifier(ability);
        };

        return util.bonusReducer([
            inventoryBonus,
            classBonus,
            featBonus,
            magicBonus,
            abilityBonus
        ]);
    }
}
