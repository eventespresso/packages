import React from 'react';
import classNames from 'classnames';

import { Dotdotdot } from '@eventespresso/adapters';
import { TextFit } from '@eventespresso/components';
import { Edit } from '@eventespresso/icons';

import { TabbableText } from '../';
import type { PreviewProps } from './types';

import './style.scss';

const Preview: React.FC<PreviewProps> = ({
	'aria-describedby': ariaDescribedby,
	className,
	fitText,
	isDisabled,
	isEditing,
	lineCount,
	lineLength = 25,
	onRequestEdit,
	tooltip,
	value,
}) => {
	if (isEditing) {
		return null;
	}

	const icon = isDisabled ? null : <Edit className='ee-inline-edit__edit-icon' />;

	const previewClassName = classNames('ee-inline-edit__preview', className);

	let textInput: string | JSX.Element = value;

	if (fitText) {
		textInput = (
			<TextFit
				max={24} // based on --ee-font-size-bigger: 1.5rem;
				min={18}
				mode='single'
			>
				{textInput}
			</TextFit>
		);
	}

	// the order of the conditional is very important here
	if (lineCount && String(value)?.length > lineLength) {
		textInput = <Dotdotdot clamp={lineCount}>{value}</Dotdotdot>;
	}

	return (
		<TabbableText
			aria-describedby={ariaDescribedby}
			className={previewClassName}
			icon={icon}
			onClick={onRequestEdit}
			isDisabled={isDisabled}
			text={textInput}
			tooltip={tooltip}
		/>
	);
};

export default Preview;
