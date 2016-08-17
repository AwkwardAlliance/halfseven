export default function abilities() {
    return {
        getModifier
    };

    function getModifier(ability) {
        return Math.floor((ability - 10) / 2)
    }
}
