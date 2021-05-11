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
		return await page.$eval('#edit-slug-box #sample-permalink', (el) => el.querySelector('a').getAttribute('href'));
	};

	/**
	 * Sets the maximum registrations value.
	 */
	setMaxRegistrations = async (value: number, updateEvent = true) => {
		await page.fill('#max-registrants', String(value));

		await this.updateEvent(updateEvent);
	};

	/**
	 * Updates the event by clicking the Publish/update button
	 */
	updateEvent = async (update = true) => {
		if (update) {
			await Promise.all([page.waitForNavigation(), page.click('#publish')]);
		}
	};

	/**
	 * Enable/Disable questions for registrants
	 */
	questionsForRegistrant = async (
		registrants: 'primary' | 'additional' = 'primary',
		{ personalInfo = false, address = false } = {},
		updateEvent = true
	) => {
		const selector = `#espresso_events_Registration_Form_Hooks_Extend_${registrants}_questions_metabox`;

		const metabox = await page.$(selector);

		if (personalInfo) {
			await metabox.$eval('text=Personal Information', (e) => e.closest('p').querySelector('input').click());
		}
		if (address) {
			await metabox.$eval('text=Address Information', (e) => e.closest('p').querySelector('input').click());
		}

		await this.updateEvent(updateEvent);
	};
}
