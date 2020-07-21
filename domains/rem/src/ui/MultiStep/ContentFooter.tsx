import React from 'react';

import { Button, ButtonRow, Next, Previous } from '@eventespresso/components';

import useCancelButtonProps from './useCancelButtonProps';
import { useStepsState } from '../../context';

interface Props {
	onClose: VoidFunction;
}

const ContentFooter: React.FC<Props> = ({ onClose }) => {
	const { current, next, prev } = useStepsState();
	const cancelButtonProps = useCancelButtonProps(onClose);
	const cancelButton = <Button mr={3} {...cancelButtonProps} />;

	return (
		<ButtonRow noMargin rightAligned>
			{
				// hide previous on first step
				current > 0 && <Previous onClick={prev} />
			}
			{
				// hide next on last step
				current < 4 && <Next onClick={next} />
			}
			{cancelButton}
		</ButtonRow>
	);
};

export default ContentFooter;
