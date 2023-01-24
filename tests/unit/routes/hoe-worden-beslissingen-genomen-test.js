import { module, test } from 'qunit';
import { setupTest } from 'frontend/tests/helpers';

module('Unit | Route | hoe-worden-beslissingen-genomen', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:hoe-worden-beslissingen-genomen');
    assert.ok(route);
  });
});
