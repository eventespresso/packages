import React from 'react';

import { ButtonRow, Next, Previous } from '@eventespresso/components';

import { useStepsState } from '../../context';

const ContentFooter: React.FC = () => {
	const { current, next, prev } = useStepsState();

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
		</ButtonRow>
	);
};

export default ContentFooter;
