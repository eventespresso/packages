import React from 'react';
import useFitText from 'use-fit-text';

import type { TextFitProps } from './types';

export const TextFit: React.FC<TextFitProps> = ({ text }) => {
	const { fontSize, ref } = useFitText();

	return (
		<div ref={ref} style={{ fontSize, height: 40, width: 100 }}>
			{text}
		</div>
	);
};
