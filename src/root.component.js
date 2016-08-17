export default {
    template: `
<halfseven-toolbar
    character="$ctrl.character">
</halfseven-toolbar>
<halfseven-content
    ui-view="content">
</halfseven-content>
<pre ng-bind="$ctrl.character | json"></pre>
<halfseven-nav></halfseven-nav>
`,
    controller: RootController,
};

function RootController(characterService) {
    this.$onInit = $onInit.bind(this);

    function $onInit() {
        return characterService.get()
            .then(() => this.character = characterService.character);
    }
}
