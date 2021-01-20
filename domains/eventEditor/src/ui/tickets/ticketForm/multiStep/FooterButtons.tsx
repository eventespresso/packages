import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { FormSpy } from '@eventespresso/form';

import { ButtonRow, ButtonType, Next, Previous, Submit } from '@eventespresso/ui-components';
import { useTickets } from '@eventespresso/edtr-services';
import { findEntityByGuid, hasEmptyPrices } from '@eventespresso/predicates';
import { SOLD_TICKET_ERROR_MESSAGE } from '@eventespresso/tpc';
import type { PrevNext } from '@eventespresso/hooks';

import { useDataState as useTAMDataState } from '@edtrUI/ticketAssignmentsManager/data';

/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const subscription = {
	values: true,
	submitting: true,
	hasValidationErrors: true,
	hasSubmitErrors: true,
	pristine: true,
};

type FooterButtonsProps = {
	steps: PrevNext;
};

const FooterButtons: React.FC<FooterButtonsProps> = ({ steps }) => {
	const { current, goto, prev, next } = steps;
	const { hasOrphanEntities } = useTAMDataState();
	const isSubmitDisabled = hasOrphanEntities();
	const tickets = useTickets();

	const gotoDetails = useCallback(() => goto(0), [goto]);
	const gotoTAM = useCallback(() => goto(2), [goto]);

	return (
		<FormSpy subscription={subscription}>
			{({ form, hasSubmitErrors, hasValidationErrors, submitting, pristine, values }) => {
				const isSaveDisabled = submitting || hasValidationErrors || hasSubmitErrors || pristine;

				const isTPCSubmitDisabled = hasEmptyPrices(values?.prices || []);
				const ticket = values?.id && findEntityByGuid(tickets)(values?.id);
				const isTicketSold = Boolean(ticket?.sold);

				return (
					<ButtonRow>
						{current === 0 && (
							<>
								<Next
									buttonText={__('Set ticket prices')}
									buttonType={ButtonType.SECONDARY}
									isDisabled={isSaveDisabled}
									onClick={isTicketSold ? null : next}
									tooltip={isTicketSold && SOLD_TICKET_ERROR_MESSAGE}
								/>
								<Next
									buttonText={__('Skip prices - assign dates')}
									isDisabled={isSaveDisabled}
									onClick={gotoTAM}
									skipsSteps
								/>
							</>
						)}

						{current === 1 && (
							<>
								<Previous onClick={prev} />
								<Next
									buttonText={__('Save and assign dates')}
									onClick={next}
									isDisabled={isTPCSubmitDisabled}
								/>
							</>
						)}

						{current === 2 && (
							<>
								<Previous buttonText={__('Ticket details')} onClick={gotoDetails} skipsSteps />
								<Previous onClick={prev} />
								<Submit onClick={form.submit} isDisabled={isSubmitDisabled} />
							</>
						)}
					</ButtonRow>
				);
			}}
		</FormSpy>
	);
};

export default FooterButtons;
