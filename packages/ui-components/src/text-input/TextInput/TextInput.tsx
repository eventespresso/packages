import { forwardRef } from 'react';
import classNames from 'classnames';

import { TextInput as TextInputAdapter, TextInputProps } from '@eventespresso/adapters';

import './style.scss';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
	const className = classNames('ee-text-input', props.className);

	return <TextInputAdapter {...props} className={className} ref={ref} />;
});
