import * as yup from 'yup';

import { yupToFinalFormErrors } from '@eventespresso/form';
import { datesSchema } from '@eventespresso/ee-components';
import type { DateFormShape } from '@eventespresso/edtr-services';

export const validate = async (values: DateFormShape): Promise<any> => {
	return await yupToFinalFormErrors(validationSchema, values);
};

const validationSchema = yup.object({
	name: yup.string(),
	...datesSchema,
});
