import React from 'react';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';

import { TextFit } from '@eventespresso/adapters';
import { Edit } from '@eventespresso/icons';

import { TabbableText } from '../';
import type { PreviewProps } from './types';

import './style.scss';

const Preview: React.FC<PreviewProps> = ({
	className,
	fitText,
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

	const icon = <Edit className={'ee-inline-edit__edit-icon'} />;

	const previewClassName = classNames('ee-inline-edit__preview-wrapper', className && className);

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
			className={previewClassName}
			icon={icon}
			onClick={onRequestEdit}
			text={textInput}
			tooltip={tooltip}
		/>
	);
};

export default Preview;
