import { __ } from '@wordpress/i18n';
import * as yup from 'yup';

import { yupToFinalFormErrors } from '@eventespresso/form';
import { BulkEditFormShape } from './types';

export const validate = async (values: BulkEditFormShape): Promise<any> => {
	return await yupToFinalFormErrors(validationSchema, values);
};

const validationSchema = yup.object({
	name: yup.string().min(3, () => __('Name must be at least three characters')),
});
