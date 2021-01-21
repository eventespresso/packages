import { isEmpty } from 'ramda';

import { ButtonRow, Next, Previous } from '@eventespresso/ui-components';

import SubmitButton from './SubmitButton';
import { useStepsState } from '../../context';
import { useFormState } from '../../data';
import { BaseProps } from '../types';
import { DATE_DETAILS_STEP, GENERATED_DATES_STEP, PATTERN_EDITOR_STEP, TICKETS_STEP } from './constants';

const ContentFooter: React.FC<BaseProps> = ({ onSubmit }) => {
	const { current, next, prev } = useStepsState();
	const { rRule, dateDetails, tickets } = useFormState();

	let isNextDisabled: boolean;
	const dateNameLen = dateDetails?.name?.length;

	switch (current) {
		case PATTERN_EDITOR_STEP:
			isNextDisabled = !rRule;
			break;
		case DATE_DETAILS_STEP:
			isNextDisabled = !dateNameLen;
			break;
		case TICKETS_STEP:
			isNextDisabled = isEmpty(tickets);
			break;
	}

	return (
		<ButtonRow horizontalAlign='right' topBordered>
			{
				// hide previous on first step
				current > PATTERN_EDITOR_STEP && <Previous onClick={prev} />
			}
			{
				// hide next on last step
				current < GENERATED_DATES_STEP && <Next isDisabled={isNextDisabled} onClick={next} />
			}
			{
				// last step
				current === GENERATED_DATES_STEP && <SubmitButton onClick={onSubmit} />
			}
		</ButtonRow>
	);
};

export default ContentFooter;
