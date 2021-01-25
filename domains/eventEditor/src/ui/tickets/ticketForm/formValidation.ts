import * as yup from 'yup';

import { TicketFormShape } from '@eventespresso/edtr-services';
import { yupToFinalFormErrors } from '@eventespresso/form';
import { datesSchema } from '@eventespresso/ee-components';

export const validate = async (values: TicketFormShape): Promise<any> => {
	return await yupToFinalFormErrors(validationSchema, values);
};

const validationSchema = yup.object({
	name: yup.string(),
	...datesSchema,
});
