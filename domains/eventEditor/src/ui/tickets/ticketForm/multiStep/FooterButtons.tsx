import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { ButtonRow, ButtonType, Next, Previous, Submit } from '@eventespresso/ui-components';
import { withFormSubscription, FormSubscriptionProps } from '@eventespresso/ee-components';
import { SOLD_TICKET_ERROR_MESSAGE, useLazyTicket } from '@eventespresso/edtr-services';
import { hasEmptyPrices } from '@eventespresso/predicates';
import type { PrevNext } from '@eventespresso/hooks';

import { useDataState as useTAMDataState } from '@edtrUI/ticketAssignmentsManager/data';
import { ASSIGN_DATES_STEP, TICKET_DETAILS_STEP, TICKET_PRICES_STEP } from './constants';

interface FooterButtonsProps extends FormSubscriptionProps {
	steps: PrevNext;
}

const FooterButtons: React.FC<FooterButtonsProps> = ({ form, hasErrors, steps, submitting }) => {
	const { current, goto, prev, next } = steps;
	const { hasOrphanEntities } = useTAMDataState();
	const isSubmitDisabled = hasOrphanEntities();
	const getTicket = useLazyTicket();

	const gotoDetails = useCallback(() => goto(TICKET_DETAILS_STEP), [goto]);
	const gotoTAM = useCallback(() => goto(ASSIGN_DATES_STEP), [goto]);

	const { values } = form.getState();

	const isTPCSubmitDisabled = hasEmptyPrices(values?.prices || []);
	const ticket = values?.id && getTicket(values?.id);
	const isTicketSold = Boolean(ticket?.sold);

	return (
		<ButtonRow>
			{current === TICKET_DETAILS_STEP && (
				<>
					<Next
						buttonText={__('Set ticket prices')}
						buttonType={ButtonType.SECONDARY}
						isDisabled={hasErrors}
						onClick={isTicketSold ? null : next}
						tooltip={isTicketSold && SOLD_TICKET_ERROR_MESSAGE}
					/>
					<Next
						buttonText={__('Skip prices - assign dates')}
						isDisabled={hasErrors}
						onClick={gotoTAM}
						skipsSteps
					/>
				</>
			)}

			{current === TICKET_PRICES_STEP && (
				<>
					<Previous onClick={prev} />
					<Next buttonText={__('Save and assign dates')} onClick={next} isDisabled={isTPCSubmitDisabled} />
				</>
			)}

			{current === ASSIGN_DATES_STEP && (
				<>
					<Previous
						buttonText={__('Ticket details')}
						onClick={gotoDetails}
						isDisabled={submitting}
						skipsSteps
					/>
					<Previous onClick={prev} isDisabled={submitting} />
					<Submit onClick={form.submit} isDisabled={isSubmitDisabled} isLoading={submitting} />
				</>
			)}
		</ButtonRow>
	);
};

export default withFormSubscription(FooterButtons);
