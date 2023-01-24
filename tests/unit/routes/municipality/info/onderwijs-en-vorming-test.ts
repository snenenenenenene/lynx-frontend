import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | municipality/info/OnderwijsEnVorming', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup(
      'route:municipality/info/onderwijs-en-vorming'
    );
    assert.ok(route);
  });
});
