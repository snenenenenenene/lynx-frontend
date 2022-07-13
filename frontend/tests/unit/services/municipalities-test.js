import { module, test } from 'qunit';
import { setupTest } from 'frontend/tests/helpers';

module('Unit | Service | municipalities', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:municipalities');
    assert.ok(service);
  });
});
