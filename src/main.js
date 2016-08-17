import angular from 'angular';

import root from './root.component';
import character from './character/character.component';
import bio from './character/bio.component';
import toolbar from './toolbar/toolbar.component';
import toolbarAbilities from './toolbar/abilities.component';
import toolbarAbility from './toolbar/ability.component';
import toolbarBio from './toolbar/bio.component';

import characterService from './character/character.service';

angular.module('halfseven', [])
    .component('halfsevenRoot', root)
    .component('halfsevenCharacter', character)
    .component('halfsevenBio', bio)
    .component('halfsevenToolbar', toolbar)
    .component('halfsevenToolbarAbilities', toolbarAbilities)
    .component('halfsevenToolbarAbility', toolbarAbility)
    .component('halfsevenToolbarBio', toolbarBio)

    .service('characterService', characterService);
