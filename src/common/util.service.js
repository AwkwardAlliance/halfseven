export default function util() {
    return {
        bonusReducer,
        sumOf
    }

    function bonusReducer(bonuses) {
        return function (character) {
            return reduce(
                bonuses,
                (base, bonus) => base + bonus(character),
                10
            );
        };
    }

    function sumOf(key) {
        return function (collection) {
            return reduce(
                map(collection, key),
                (sum, value) => sum += isNumber(value) ? value : 0,
                0
            );
        }
    }
}
