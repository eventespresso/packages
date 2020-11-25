import React from 'react';
import classNames from 'classnames';

import {
	InputWithLabel as InputWithLabelAdapter,
	InputWithLabelProps as InputWithLabelAdapterProps,
} from '@eventespresso/adapters';
import './style.scss';

export interface InputWithLabelProps extends InputWithLabelAdapterProps {
	label: React.ReactNode;
	labelPosition?: 'left' | 'right';
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ input, label, labelPosition = 'right' }) => {
	const leftLabel = labelPosition === 'left' && label;
	const leftLabelClassName = leftLabel && 'ee-input-with-label__left-label';

	const rightLabel = labelPosition === 'right' && label;
	const rightLabelClassName = rightLabel && 'ee-input-with-label__right-label';

	const className = classNames('ee-input-with-label', leftLabelClassName, rightLabelClassName);

	return <InputWithLabelAdapter className={className} input={input} leftLabel={leftLabel} rightLabel={rightLabel} />;
};
