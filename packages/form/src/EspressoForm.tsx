import React, { useMemo } from 'react';
import { Form as ReactFinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import type { EspressoFormProps } from './types';
import FormRenderer from './renderers/FormRenderer';
import { FormProvider } from './context';
import { updateFieldValue } from './utils';
import './styles.scss';
import { useMemoStringify } from '@eventespresso/services';

const EspressoForm: React.FC<EspressoFormProps> = ({ onSubmit, mutators, layout, ...rest }) => {
	const context = useMemoStringify({ layout });
	const formMutators = useMemo(
		() => ({
			...arrayMutators,
			...mutators,
			updateFieldValue,
		}),
		[mutators]
	);

	return (
		<FormProvider value={context}>
			<ReactFinalForm component={FormRenderer} onSubmit={onSubmit} mutators={formMutators} {...rest} />
		</FormProvider>
	);
};

export default EspressoForm;
