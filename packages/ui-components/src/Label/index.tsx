import classNames from 'classnames';

import { FormLabel } from '@eventespresso/adapters';

import './style.scss';

export interface LabelProps {
	ariaLabel?: string;
	hidden?: boolean;
	id?: string;
	label?: string;
	className?: string;
}

export const Label: React.FC<LabelProps> = ({ ariaLabel, className, hidden = false, id, label }) => {
	const labelClassName = classNames('ee-input-label', hidden && 'screen-reader-text', className);
	return (
		<FormLabel aria-label={ariaLabel || label} className={labelClassName} id={`${id}-label`} htmlFor={id}>
			{label}
		</FormLabel>
	);
};
