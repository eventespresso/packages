import { Banner } from '../';
import { WarningTriangle } from '@eventespresso/icons';
import type { ErrorIndicatorProps } from './types';

import './style.scss';

export const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ description, title }) => (
	<Banner
		className='ee-error-indicator'
		description={description}
		icon={<WarningTriangle />}
		status='error'
		title={title}
		variant='subtle'
	/>
);
