import { pick } from 'ramda';
import { FormSpy } from 'react-final-form';

import { DebugInfo } from '@eventespresso/ui-components';

import type { FormRendererProps } from '../types';
import Submit from '../Submit';
import RenderFields from '../RenderFields';
import RenderSections from '../RenderSections';

const EMPTY_ARRAY = [];

const FormRenderer: React.FC<FormRendererProps> = (props) => {
	const {
		submitting,
		sections = EMPTY_ARRAY,
		fields = EMPTY_ARRAY,
		submitButton,
		resetButton,
		formWrapper: FormWrapper,
		debugFields,
		hasValidationErrors,
		hasSubmitErrors,
	} = props;

	const formOutput = (
		<div className='ee-form'>
			<div className='form-wrapper'>
				<form>
					{sections?.length ? <RenderSections sections={sections} /> : null}

					{fields?.length ? <RenderFields fields={fields} /> : null}

					{/* Maybe formWrapper handles form submission */}
					{submitButton ? (
						<Submit
							hasErrors={hasValidationErrors || hasSubmitErrors}
							submitting={submitting}
							submitButton={submitButton}
							resetButton={resetButton}
						/>
					) : null}
				</form>

				{debugFields?.length && (
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

export default FormRenderer;
