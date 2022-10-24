import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | municipality/info/LokaalBestuur', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:municipality/info/lokaal-bestuur');
    assert.ok(route);
  });
});
