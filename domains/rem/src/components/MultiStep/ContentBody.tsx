import React from 'react';
import { __ } from '@wordpress/i18n';
import { FormSpy } from '@eventespresso/form';

import { ButtonRow, Next, Previous, Submit } from '@eventespresso/components';
import { usePrevNext } from '@eventespresso/services';
import Steps from './Steps';

const ContentBody: React.FC = ({ children }) => {
	const { current, prev, next } = usePrevNext();

	const subscription = { submitting: true, hasValidationErrors: true, hasSubmitErrors: true };

	return (
		<FormSpy subscription={subscription}>
			{({ form, hasSubmitErrors, hasValidationErrors, submitting }) => {
				const isSaveDisabled = submitting || hasValidationErrors || hasSubmitErrors;

				return (
					<div>
						<Steps current={current} />
						{current === 0 && (
							<>
								{children}
								<ButtonRow rightAligned>
									<Next onClick={next} isDisabled={isSaveDisabled} />
								</ButtonRow>
							</>
						)}

						{current === 1 && (
							<>
								<ButtonRow rightAligned>
									<Previous onClick={prev} />
									<Submit onClick={form.submit} isDisabled={isSubmitDisabled} />
								</ButtonRow>
							</>
						)}
					</div>
				);
			}}
		</FormSpy>
	);
};

export default ContentBody;
