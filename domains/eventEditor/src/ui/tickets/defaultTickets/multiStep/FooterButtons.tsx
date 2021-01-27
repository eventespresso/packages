import { __ } from '@eventespresso/i18n';
import { ButtonRow, ButtonType, Next, Previous, Submit } from '@eventespresso/ui-components';
import { withFormSubscription, FormSubscriptionProps } from '@eventespresso/ee-components';
import { hasEmptyPrices } from '@eventespresso/predicates';
import type { PrevNext } from '@eventespresso/hooks';

import { TICKET_DETAILS_STEP, TICKET_PRICES_STEP } from '../../ticketForm/multiStep/constants';

interface FooterButtonsProps extends FormSubscriptionProps {
	steps: PrevNext;
}

const FooterButtons: React.FC<FooterButtonsProps> = ({ form, hasErrors, steps }) => {
	const { current, prev, next } = steps;

	const { values } = form.getState();

	const isTPCSubmitDisabled = hasEmptyPrices(values?.prices || []);

	return (
		<ButtonRow>
			{/* RFF fields */}
			{current === TICKET_DETAILS_STEP && (
				<>
					<Next
						buttonText={__('Set ticket prices')}
						buttonType={ButtonType.SECONDARY}
						isDisabled={hasErrors}
						onClick={next}
					/>
					<Submit buttonText={__('Skip prices - Save')} isDisabled={hasErrors} onClick={form.submit} />
				</>
			)}

			{current === TICKET_PRICES_STEP && (
				<>
					<Previous onClick={prev} buttonText={__('Ticket details')} />
					<Submit onClick={form.submit} isDisabled={isTPCSubmitDisabled} buttonText={__('Save')} />
				</>
			)}
		</ButtonRow>
	);
};

export default withFormSubscription(FooterButtons);
