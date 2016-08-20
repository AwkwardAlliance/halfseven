import angular from 'angular';

import abilities from './common/abilities.service';

angular.module('halfseven', [])
    .service('abilities', abilities);
