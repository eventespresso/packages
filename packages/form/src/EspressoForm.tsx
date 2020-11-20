import React, { useMemo } from 'react';
import { Form as ReactFinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import type { AnyObject } from 'final-form';
import setFieldData from 'final-form-set-field-data';

import type { EspressoFormProps } from './types';
import FormRenderer from './renderers/FormRenderer';
import { updateFieldValue } from './utils';
import { withConfig } from './context';
import './styles.scss';

const EspressoForm = <FormValues extends AnyObject>({
	onSubmit,
	mutators,
	...rest
}: EspressoFormProps<FormValues>): JSX.Element => {
	const formMutators = useMemo(
		() => ({
			...arrayMutators,
			...mutators,
			setFieldData,
			updateFieldValue,
		}),
		[mutators]
	);

	return <ReactFinalForm component={FormRenderer} onSubmit={onSubmit} mutators={formMutators} {...rest} />;
};

export default withConfig(EspressoForm);
