import '@testing-library/jest-dom';

import { activatePlugin } from '../utils/admin/wp-plugins-page';
import { loginUser } from '../utils/wp';

// The Jest timeout is increased because these tests are a bit slow
jest.setTimeout(300000);

// Before every test suite run, delete all content created by the test. This ensures
// other posts/comments/etc. aren't dirtying tests and tests don't depend on
// each other's side-effects.
beforeAll(async () => {
	await loginUser();

	await activatePlugin('event-espresso-core/espresso.php');
});
