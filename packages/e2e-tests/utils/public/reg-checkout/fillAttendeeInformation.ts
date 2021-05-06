export type AttendeeInformation = {
	fname: string;
	lname: string;
	email: string;
	address?: string;
};

const FORM_SELECTOR = '#ee-spco-attendee_information-reg-step-form';

const fields: Array<keyof AttendeeInformation> = ['fname', 'lname', 'email', 'address']

export const fillAttendeeInformation = async (args: AttendeeInformation) => {
	for (const field of fields) {
		await page.fill(`${FORM_SELECTOR} input.ee-reg-qstn-${field}`, args[field]);
	}
};
