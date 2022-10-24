import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | municipality/decision', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:municipality/decision');
    assert.ok(route);
  });
});
