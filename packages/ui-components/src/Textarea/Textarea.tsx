import classNames from 'classnames';

import { Textarea as TextAreaAdapter, TextareaProps } from '@eventespresso/adapters';

import { withLabel } from '../withLabel';

import './style.scss';

export const Textarea: React.FC<TextareaProps> = (props) => {
	const className = classNames('ee-textarea', props.className);

	return <TextAreaAdapter {...props} className={className} />;
};

export const TextareaWithLabel = withLabel(Textarea);
