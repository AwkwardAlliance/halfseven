export default {
    bindings: {
        character: '<',
    },
    templateUrl: 'toolbar/toolbar.tpl.html',
    controller: ToolbarController,
};

function ToolbarController() {
    this.$onInit = $onInit.bind(this);
    this.abilityBonus = abilityBonus;

    function $onInit() {
        this.isAbilitiesOpen = false;
    }

    function abilityBonus(score) {
        return Math.floor((score - 10) / 2);
    }
}
