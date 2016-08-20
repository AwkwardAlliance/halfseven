const helper = require('../../test-helper');
require('../../build/main');

const assert = require('assert');

beforeEach(helper.module('halfseven'));

describe('Service | halfseven | abilities', () => {
    let abilities;

    beforeEach(helper.module('halfseven'));

    beforeEach(helper.inject(($injector) => {
        abilities = $injector.get('abilities');
    }));

    describe('#getModifier', () => {
        it('should exist', () => {
            assert.ok(abilities.getModifier);
        });
    });
});
