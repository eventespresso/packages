import { __ } from '@eventespresso/i18n';
import { FormSpy } from '@eventespresso/form';

import { ButtonRow, Next, Previous, Submit } from '@eventespresso/ui-components';
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
	const { current, prev, next } = steps;
	const { hasOrphanEntities } = useTAMDataState();
	const isSubmitDisabled = hasOrphanEntities();

	return (
		<FormSpy subscription={subscription}>
			{({ form, hasSubmitErrors, hasValidationErrors, submitting, pristine }) => {
				const isSaveDisabled = submitting || hasValidationErrors || hasSubmitErrors || pristine;

				return (
					<ButtonRow>
						{current === 0 && (
							<Next
								buttonText={__('Save and assign tickets')}
								onClick={next}
								isDisabled={isSaveDisabled}
							/>
						)}

						{current === 1 && (
							<>
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
