import React from 'react';
import { pick } from 'ramda';
import { FormSpy } from 'react-final-form';

import type { FormRendererProps } from '../types';
import Submit from '../Submit';
import RenderFields from '../RenderFields';
import RenderSections from '../RenderSections';
import DebugInfo from '../../../components/src/DebugInfo/DebugInfo'; // to avoid circular dependency, also since it's used only in dev
import { reactFinalFormState } from '@eventespresso/services';

const FormRenderer: React.FC<FormRendererProps> = (props) => {
	const {
		dateTimeFormats,
		debugFields,
		fields = [],
		formWrapper: FormWrapper,
		hasValidationErrors,
		hasSubmitErrors,
		locale,
		submitting,
		sections = [],
		submitButton,
		resetButton,
	} = props;

	const formOutput = (
		<div className='ee-form'>
			<div className='form-wrapper'>
				<form>
					{sections.length ? (
						<RenderSections dateTimeFormats={dateTimeFormats} locale={locale} sections={sections} />
					) : null}

					{fields.length ? (
						<RenderFields dateTimeFormats={dateTimeFormats} fields={fields} locale={locale} />
					) : null}

					{/* May be formWrapper handles form submission */}
					{submitButton ? (
						<Submit
							hasErrors={hasValidationErrors || hasSubmitErrors}
							submitting={submitting}
							submitButton={submitButton}
							resetButton={resetButton}
						/>
					) : null}
				</form>
				{debugFields.length && (
					<FormSpy>{({ form }) => <DebugInfo data={pick(debugFields, form.getState())} />}</FormSpy>
				)}
			</div>
		</div>
	);

	if (FormWrapper) {
		return <FormWrapper {...props}>{formOutput}</FormWrapper>;
	}

	return formOutput;
};

export default React.memo(FormRenderer, reactFinalFormState);
