import React from 'react';

import { ButtonRow, Next, Previous } from '@eventespresso/components';
import type { ContentFooterProps } from './types';

import { useStepsState } from '../../context';

const ContentFooter: React.FC<ContentFooterProps> = () => {
	const { current, next, prev } = useStepsState();

	return (
		<ButtonRow noMargin rightAligned>
			<Previous onClick={prev} />
			{
				// hide next on last step
				current < 4 && <Next onClick={next} />
			}
		</ButtonRow>
	);
};

export default ContentFooter;
