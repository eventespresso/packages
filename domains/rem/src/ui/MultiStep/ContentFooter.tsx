import React from 'react';
import { isEmpty } from 'ramda';
import type { UseDisclosureReturn } from '@chakra-ui/hooks';

import { ButtonRow, Next, Previous } from '@eventespresso/components';

import CancelButton from './CancelButton';
import SubmitButton from './SubmitButton';
import { useStepsState } from '../../context';
import { useFormState } from '../../data';

const ContentFooter: React.FC<Partial<UseDisclosureReturn>> = ({ onClose }) => {
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

	return (
		<ButtonRow align='right' topBordered>
			<CancelButton onClick={onClose} />
			{
				// hide previous on first step
				current > 0 && <Previous onClick={prev} />
			}
			{
				// hide next on last step
				current < 3 && <Next onClick={next} isDisabled={isNextDisabled} />
			}
			{
				// last step
				current === 3 && <SubmitButton onClose={onClose} />
			}
		</ButtonRow>
	);
};

export default ContentFooter;
