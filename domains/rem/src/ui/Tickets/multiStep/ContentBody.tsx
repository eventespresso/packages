import React from 'react';
import { __ } from '@wordpress/i18n';
import { FormSpy } from '@eventespresso/form';
import { anyPass, isNil, isEmpty } from 'ramda';

import TicketFormSteps from './TicketFormSteps';
import { usePrevNext } from '@eventespresso/hooks';
import { TicketPriceCalculator } from '@eventespresso/tpc';
import { ButtonRow, ButtonType, Next, Previous, Submit } from '@eventespresso/components';
import useDataListener from './useDataListener';

const subscription = { submitting: true, hasValidationErrors: true, hasSubmitErrors: true };

/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const ContentBody: React.FC = ({ children }) => {
	// init data listener to update RFF data
	useDataListener();

	const { current, prev, next } = usePrevNext();

	return (
		<FormSpy subscription={subscription}>
			{({ form, hasSubmitErrors, hasValidationErrors, submitting, values }) => {
				const isSaveDisabled = submitting || hasValidationErrors || hasSubmitErrors;

				const prices = values?.prices || [];
				const isTPCSubmitDisabled =
					prices.length && prices.some(({ amount }) => anyPass([isNil, isEmpty])(amount));

				return (
					<div>
						<TicketFormSteps current={current} />
						{/* RFF fields */}
						{current === 0 && (
							<>
								{children}
								<ButtonRow rightAligned>
									<Next
										buttonText={__('Add ticket prices')}
										buttonType={ButtonType.SECONDARY}
										isDisabled={isSaveDisabled}
										onClick={next}
									/>
									<Submit
										buttonText={__('Skip prices - Save')}
										isDisabled={isSaveDisabled}
										onClick={form.submit}
									/>
								</ButtonRow>
							</>
						)}

						{current === 1 && (
							<>
								<TicketPriceCalculator context='editTicketForm' />
								<ButtonRow rightAligned>
									<Previous onClick={prev} buttonText={__('Ticket details')} />
									<Submit
										onClick={form.submit}
										isDisabled={isTPCSubmitDisabled}
										buttonText={__('Save')}
									/>
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
