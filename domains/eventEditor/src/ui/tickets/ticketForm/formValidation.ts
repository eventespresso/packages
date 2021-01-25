import * as yup from 'yup';

import { TicketFormShape } from '@eventespresso/edtr-services';
import { datesSchema, yupToFinalFormErrors } from '@eventespresso/form';

export const validate = async (values: TicketFormShape): Promise<any> => {
	return await yupToFinalFormErrors(validationSchema, values);
};

const validationSchema = yup.object({
	name: yup.string(),
	...datesSchema,
});
