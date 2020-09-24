import React from 'react';
import { __ } from '@eventespresso/i18n';
import { FormSpy } from '@eventespresso/form';

import { ButtonRow, Next, Previous, Submit } from '@eventespresso/components';
import { usePrevNext } from '@eventespresso/hooks';

import { TicketAssignmentsManager } from '@edtrUI/ticketAssignmentsManager/components';
import { useDataState as useTAMDataState } from '@edtrUI/ticketAssignmentsManager/data';
import DateFormSteps from './DateFormSteps';
import useDataListener from './useDataListener';

const subscription = { submitting: true, hasValidationErrors: true, hasSubmitErrors: true };
/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const ContentBody: React.FC = ({ children }) => {
	// init data listener to update RFF data
	useDataListener();

	const { current, prev, next } = usePrevNext();
	const { hasOrphanEntities } = useTAMDataState();

	const isSubmitDisabled = hasOrphanEntities();

	return (
		<FormSpy subscription={subscription}>
			{({ form, hasSubmitErrors, hasValidationErrors, submitting }) => {
				const isSaveDisabled = submitting || hasValidationErrors || hasSubmitErrors;

				return (
					<div>
						<DateFormSteps current={current} />
						{/* RFF fields */}
						{current === 0 && (
							<>
								{children}
								<ButtonRow>
									<Next
										buttonText={__('Save and assign tickets')}
										onClick={next}
										isDisabled={isSaveDisabled}
									/>
								</ButtonRow>
							</>
						)}

						{current === 1 && (
							<>
								<TicketAssignmentsManager />
								<ButtonRow>
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
