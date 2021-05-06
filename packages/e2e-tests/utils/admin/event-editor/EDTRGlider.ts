/**
 * Helper class to deal with EDTR.
 */
export class EDTRGlider {
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
