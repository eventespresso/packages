import { loginUser } from './loginUser';
import { WP_USERNAME, WP_ADMIN_USER } from '../dev/config';

/**
 * Switches the current user to whichever user we should be
 * running the tests as (if we're not already that user).
 */
export async function switchUserToTest(): Promise<void> {
	if (WP_USERNAME === WP_ADMIN_USER.username) {
		return;
	}

	await loginUser();
}
