import classNames from 'classnames';

import { Checkbox } from '../';
import type { CheckboxProps } from '@eventespresso/adapters';

export const ActionCheckbox: React.FC<CheckboxProps> = (props) => {
	const className = classNames(props.className, 'ee-bulk-edit-actions__checkbox');

	return <Checkbox {...props} className={className} />;
};
