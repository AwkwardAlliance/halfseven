export default function size() {
    return {
        getArmorClassBonus: c => armorClassBonus(c.size),
        getSpecialAttackModifier: c => specialAttackModifier(c.size),
        getHideModifier: c => hideModifier(c.size)
    };
}

function armorClassBonus(size) {
    const sizeMap = {
        '-4': 8,
        '-3': 4,
        '-2': 2,
        '-1': 1,
        '0': 0,
        '1': -1,
        '2': -2,
        '3': -4,
        '4': -8
    }
    return sizeMap['' + size];
}

function specialAttackModifier(size) {
    return size * 4;
}

function hideModifier(size) {
    return -size * 4;
}
