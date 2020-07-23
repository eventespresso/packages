import React from 'react';
import { isEmpty } from 'ramda';

import { Button, ButtonRow, Next, Previous } from '@eventespresso/components';

import useCancelButtonProps from './useCancelButtonProps';
import { useStepsState } from '../../context';
import { useFormState } from '../../data';

interface Props {
	onClose: VoidFunction;
}

const ContentFooter: React.FC<Props> = ({ onClose }) => {
	const { current, next, prev } = useStepsState();
	const { rRule, dateDetails, tickets } = useFormState();

	let isNextDisabled: boolean;
	const dateNameLen = dateDetails?.name?.length;

	switch (current) {
		case 0: // pattern step
			isNextDisabled = !rRule;
			break;
		case 1: // date details step
			isNextDisabled = !dateNameLen || dateNameLen < 3;
			break;
		case 2: // tickets step
			isNextDisabled = isEmpty(tickets);
			break;
	}

	const cancelButtonProps = useCancelButtonProps(onClose);
	return (
		<ButtonRow rightAligned topBordered>
			{
				// hide previous on first step
				current > 0 && <Previous onClick={prev} />
			}
			{
				// hide next on last step
				current < 3 && <Next onClick={next} isDisabled={isNextDisabled} />
			}
			<Button {...cancelButtonProps} />
		</ButtonRow>
	);
};

export default ContentFooter;
