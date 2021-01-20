import * as yup from 'yup';

import { datesSchema, DateFormShape } from '@eventespresso/edtr-services';
import { yupToFinalFormErrors } from '@eventespresso/form';

export const validate = async (values: DateFormShape): Promise<any> => {
	return await yupToFinalFormErrors(validationSchema, values);
};

const validationSchema = yup.object({
	name: yup.string(),
	...datesSchema,
});
