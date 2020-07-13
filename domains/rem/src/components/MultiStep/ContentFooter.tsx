import React from 'react';

import { ButtonRow, Next, Previous } from '@eventespresso/components';
import type { ContentFooterProps } from './types';

import { useStepsState } from '../../context';

const ContentFooter: React.FC<ContentFooterProps> = () => {
	const { current, next, prev } = useStepsState();

	return (
		<>
			{current === 0 && (
				<>
					<ButtonRow noMargin rightAligned>
						<Next onClick={next} />
					</ButtonRow>
				</>
			)}

			{current === 1 && (
				<>
					<ButtonRow noMargin rightAligned>
						<Previous onClick={prev} />
						<Next onClick={next} />
					</ButtonRow>
				</>
			)}
		</>
	);
};

export default ContentFooter;
