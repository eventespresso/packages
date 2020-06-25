import * as React from 'react';
import withEnhance from '../withEnhance';
import { IconProps } from '../types';

const SvgInfinity = (props: IconProps): JSX.Element => {
	return (
		<svg width={24} height={24} {...props}>
			<path d='M18.571 6C15.718 6 13.963 8.164 12 10.201 10.037 8.164 8.282 6 5.429 6 2.232 6 0 8.455 0 12s2.232 6 5.429 6c2.854 0 4.608-2.164 6.571-4.201C13.963 15.836 15.718 18 18.571 18 21.768 18 24 15.545 24 12s-2.232-6-5.429-6zM5.429 16c-2.114 0-3.479-1.578-3.479-4s1.366-4 3.479-4c2.311 0 3.719 2.05 5.365 4-1.647 1.95-3.055 4-5.365 4zm13.142 0c-2.311 0-3.719-2.05-5.365-4 1.646-1.95 3.054-4 5.365-4 2.114 0 3.479 1.578 3.479 4s-1.365 4-3.479 4z' />
		</svg>
	);
};

export default withEnhance(SvgInfinity);
