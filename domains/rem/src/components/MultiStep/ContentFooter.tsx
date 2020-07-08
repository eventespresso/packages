import React from 'react';

import { ButtonRow, Next, Previous } from '@eventespresso/components';
import type { ContentFooterProps } from './types';

const ContentFooter: React.FC<ContentFooterProps> = ({ current, next, prev }) => {
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
					</ButtonRow>
				</>
			)}
		</>
	);
};

export default ContentFooter;
