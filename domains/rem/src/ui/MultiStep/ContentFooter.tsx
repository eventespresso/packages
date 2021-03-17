import { useCallback, useState } from 'react';
import { isEmpty } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { ButtonRow, ButtonProps, Next, Previous } from '@eventespresso/ui-components';
import { Slot } from '@eventespresso/slot-fill';
import { EdtrSlots } from '@eventespresso/services';

import SubmitButton from './SubmitButton';
import { useStepsState } from '../../context';
import { useFormState } from '../../data';
import { BaseProps } from '../types';
import { DATE_DETAILS_STEP, GENERATED_DATES_STEP, PATTERN_EDITOR_STEP, TICKETS_STEP } from './constants';

const ContentFooter: React.FC<BaseProps> = ({ onSubmit }) => {
	const { current, next, prev, goto } = useStepsState();
	const { rRule, dateDetails, tickets } = useFormState();
	const [isSubmitting, setIsSubmitting] = useState(false);

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

	const onSubmitHandler = useCallback<ButtonProps['onClick']>(async () => {
		setIsSubmitting(true);
		await onSubmit();
		setIsSubmitting(false);
	}, [onSubmit]);

	const gotoPatternEditor = useCallback(() => goto(PATTERN_EDITOR_STEP), [goto]);

	const paternEditorStep = (
		<Previous buttonText={__('Pattern Editor')} onClick={gotoPatternEditor} isDisabled={isSubmitting} skipsSteps />
	);

	return (
		<ButtonRow horizontalAlign='right' topBordered>
			{current === PATTERN_EDITOR_STEP && <Next onClick={next} />}

			{current === DATE_DETAILS_STEP && (
				<>
					<Previous onClick={prev} />
					<Next onClick={next} isDisabled={isNextDisabled} />
				</>
			)}

			{current === TICKETS_STEP && (
				<>
					{paternEditorStep}
					<Previous onClick={prev} />
					<Next onClick={next} isDisabled={isNextDisabled} />
				</>
			)}

			{
				// last step
				current === GENERATED_DATES_STEP && (
					<>
						{paternEditorStep}
						<Previous onClick={prev} />
						<SubmitButton isLoading={isSubmitting} onClick={onSubmitHandler} />
					</>
				)
			}
			<Slot name={EdtrSlots.REM_MODAL_FOOTER} />
		</ButtonRow>
	);
};

export default ContentFooter;
