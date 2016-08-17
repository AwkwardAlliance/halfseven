export default {
    template: `
        <halfseven-toolbar
            character="$ctrl.character">
        </halfseven-toolbar>`,
    controller: CharacterController,
};

function CharacterController(characterService) {
    this.$onInit = $onInit.bind(this);

    function $onInit() {
        return characterService.get()
            .then(() => this.character = characterService.character);
    }
}
