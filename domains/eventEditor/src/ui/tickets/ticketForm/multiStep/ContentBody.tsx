import React from 'react';
import { __ } from '@eventespresso/i18n';
import { FormSpy } from '@eventespresso/form';

import { ButtonRow, ButtonType, Next, Previous, Submit } from '@eventespresso/components';
import { useTickets } from '@eventespresso/edtr-services';
import { findEntityByGuid, hasEmptyPrices } from '@eventespresso/predicates';
import { TicketPriceCalculator } from '@eventespresso/tpc';
import { usePrevNext } from '@eventespresso/hooks';

import { TicketAssignmentsManager } from '@edtrUI/ticketAssignmentsManager/components';
import { useDataState as useTAMDataState } from '@edtrUI/ticketAssignmentsManager/data';
import TicketFormSteps from './TicketFormSteps';
import useDataListener from './useDataListener';

const tooltip = __(
	'Ticket price modifications are blocked for Tickets that have already been sold to registrants, because doing so would negatively affect internal accounting for the event. If you still need to modify ticket prices, then create a copy of those tickets, edit the prices for the new tickets, and then archive the old tickets.'
);

/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const subscription = { values: true, submitting: true, hasValidationErrors: true, hasSubmitErrors: true };
const ContentBody: React.FC = ({ children }) => {
	// init data listener to update RFF data
	useDataListener();

	const { current, goto, prev, next } = usePrevNext();
	const { hasOrphanEntities } = useTAMDataState();
	const isSubmitDisabled = hasOrphanEntities();
	const tickets = useTickets();

	return (
		<FormSpy subscription={subscription}>
			{({ form, hasSubmitErrors, hasValidationErrors, submitting, values }) => {
				const isSaveDisabled = submitting || hasValidationErrors || hasSubmitErrors;

				const isTPCSubmitDisabled = hasEmptyPrices(values?.prices || []);
				const ticket = values?.id && findEntityByGuid(tickets)(values?.id);
				const isTicketSold = Boolean(ticket?.sold);

				return (
					<div>
						<TicketFormSteps current={current} />
						{/* RFF fields */}
						{current === 0 && (
							<>
								{children}
								<ButtonRow>
									<Next
										buttonText={__('Set ticket prices')}
										buttonType={ButtonType.SECONDARY}
										isDisabled={isSaveDisabled || isTicketSold}
										onClick={next}
										tooltip={isTicketSold && tooltip}
									/>
									<Next
										buttonText={__('Skip prices - assign dates')}
										isDisabled={isSaveDisabled}
										// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
										onClick={() => goto(2)}
										skippable
									/>
								</ButtonRow>
							</>
						)}

						{current === 1 && (
							<>
								<TicketPriceCalculator context='editTicketForm' />
								<ButtonRow>
									<Previous onClick={prev} />
									<Next
										buttonText={__('Save and assign dates')}
										onClick={next}
										isDisabled={isTPCSubmitDisabled}
									/>
								</ButtonRow>
							</>
						)}

						{current === 2 && (
							<>
								<TicketAssignmentsManager />
								<ButtonRow>
									<Previous
										buttonText={__('Ticket details')}
										// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
										onClick={() => goto(0)}
										skippable
									/>
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
