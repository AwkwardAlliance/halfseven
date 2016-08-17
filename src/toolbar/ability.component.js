export default {
    bindings: {
        name: '@',
        score: '<',
    },
    templateUrl: 'toolbar/ability.tpl.html',
    controller: ToolbarAbilityController,
};

function ToolbarAbilityController() {
    this.abilityModifier = abilityModifier;

    function abilityModifier(score) {
        return Math.floor((score - 10) / 2);
    }
}
