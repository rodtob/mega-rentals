import { module, test } from 'qunit';
import { visit, currentURL, click, typeIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'mega-rentals/tests/helpers';

module('Acceptance | mega rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h1').hasText('Mega-Rentals');

    assert.dom('.search').exists();

    await click('.search');
    await typeIn('.search', 'Sarde');
    assert.dom('[data-test-selector="carrer-de-argenter"]').doesNotExist();
  });
});
