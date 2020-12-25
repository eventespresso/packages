import classNames from 'classnames';

import { Checkbox as CheckboxAdapter } from '@eventespresso/adapters';
import type { CheckboxProps } from '@eventespresso/adapters';

export const Checkbox: React.FC<CheckboxProps> = (props) => {
	const className = classNames('ee-checkbox', props.className);

	return <CheckboxAdapter {...props} className={className} />;
};
