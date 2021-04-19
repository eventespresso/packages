import { __ } from '@eventespresso/i18n';

import { ButtonRow, Next, Previous, Submit } from '@eventespresso/ui-components';
import { withFormSubscription, FormSubscriptionProps } from '@eventespresso/ee-components';
import type { PrevNext } from '@eventespresso/hooks';

import { useDataState as useTAMDataState } from '@edtrUI/ticketAssignmentsManager/data';
import { ASSIGN_TICKETS_STEP, DATE_DETAILS_STEP } from './constants';

interface FooterButtonsProps extends FormSubscriptionProps {
	steps: PrevNext;
}

const FooterButtons: React.FC<FooterButtonsProps> = ({ form, hasErrors, steps, submitting }) => {
	const { current, prev, next } = steps;
	const { hasOrphanEntities } = useTAMDataState();
	const isSubmitDisabled = hasOrphanEntities();

	return (
		<ButtonRow>
			{current === DATE_DETAILS_STEP && (
				<Next buttonText={__('Save and assign tickets')} onClick={next} isDisabled={hasErrors} />
			)}

			{current === ASSIGN_TICKETS_STEP && (
				<>
					<Previous onClick={prev} isDisabled={submitting} />
					<Submit onClick={form.submit} isDisabled={isSubmitDisabled} isLoading={submitting} />
				</>
			)}
		</ButtonRow>
	);
};

export default withFormSubscription(FooterButtons);
