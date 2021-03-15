import classNames from 'classnames';

import { Radio as RadioAdapter } from '@eventespresso/adapters';
import type { RadioProps } from './types';
import './style.scss';

export const Radio: React.FC<RadioProps> = (props) => {
	const className = classNames('ee-radio', props.className);

	return (
		<div className='ee-radio__wrapper'>
			<RadioAdapter {...props} className={className} />
		</div>
	);
};
