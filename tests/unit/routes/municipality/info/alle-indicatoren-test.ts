import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | municipality/info/AlleIndicatoren', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:municipality/info/alle-indicatoren');
    assert.ok(route);
  });
});
