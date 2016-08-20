const helper = require('../../test-helper');
require('../../build/main');

const expect = require('chai').expect;

beforeEach(helper.module('halfseven'));

describe('Service | halfseven | abilities', () => {
    let abilities;

    beforeEach(helper.module('halfseven'));

    beforeEach(helper.inject(($injector) => {
        abilities = $injector.get('abilities');
    }));

    describe('#getModifier', () => {
        it('should exist', () => {
            expect(abilities.getModifier).not.to.be.undefined;
        });
    });
});
