import { reduce, map, isNumber } from 'lodash';

export default function armorClass(util, abilities, size) {
    const inventoryBonus = c => util.sumOf('armorClassBonus')(c.inventory);
    const dexterityBonus = c => abilities.getModifier(c.abilities.dexterity);
    const sizeBonus = c => size.getArmorClassBonus(c.race.size);
    const naturalArmor = c => c.race.naturalArmorClassBonus || 0

    return {
        get: util.bonusReducer([
            inventoryBonus,
            dexterityBonus,
            sizeBonus,
            naturalArmor
        ]),
        getTouch: util.bonusReducer([
            dexterityBonus,
            sizeBonus
        ]),
        getFlatFooted: util.bonusReducer([
            inventoryBonus,
            sizeBonus,
            naturalArmor
        ])
    };
}
