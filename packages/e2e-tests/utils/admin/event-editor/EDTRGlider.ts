/**
 * Helper class to deal with EDTR.
 */
export class EDTRGlider {
	/**
	 * Returns event edit URL, inside EDTR
	 */
	getEventEditUrl = async () => {
		const url = await page.$eval('.nav-tab-wrapper >> text=Edit Event', (el) => el.getAttribute('href'));
		return url;
	};

	/**
	 * Returns the permalink of the event, inside EDTR
	 */
	getEventPermalink = async () => {
		return await page.$eval('#edit-slug-box #sample-permalink >> a', (el) => el.getAttribute('href'));
	};

	/**
	 * Enable/Disable questions for registrants
	 */
	questionsForRegistrant = async (
		registrants: 'Primary' | 'Additional' = 'Primary',
		{ personalInfo = false, address = false } = {},
		updateEvent = true
	) => {
		const metaboxHeading = `Questions for ${registrants} Registrants`;

		const metabox = await page.$(`.postbox:has-text('${metaboxHeading}') .tckt-slctr-tbl-td-qty select`);

		if (personalInfo) {
			await metabox.$eval('text=Personal Information', (e) => e.closest('p').querySelector('input').click());
		}
		if (address) {
			await metabox.$eval('text=Address Information', (e) => e.closest('p').querySelector('input').click());
		}

		if (updateEvent) {
			await Promise.all([page.waitForNavigation(), page.click('#publish')]);
		}
	};
}
