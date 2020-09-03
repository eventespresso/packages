import React from 'react';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';

import { TextFit } from '@eventespresso/adapters';
import { Edit } from '@eventespresso/icons';

import { TabbableText } from '../index';
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
	const previewClassName = classNames('ee-inline-edit__preview-wrapper', className && className);

	const trimmedValue =
		lineCount && typeof value === 'string' && value.length > lineLength ? (
			<Dotdotdot clamp={lineCount}>{value}</Dotdotdot>
		) : (
			value
		);

	const textInput = (
		<div className={previewClassName}>
			<TabbableText
				icon={<Edit className={'ee-inline-edit__edit-icon'} />}
				onClick={onRequestEdit}
				text={trimmedValue}
				tooltip={tooltip}
			/>
		</div>
	);

	if (fitText) {
		return (
			<TextFit
				max={24} // based on --ee-font-size-bigger: 1.5rem;
				min={18}
				mode='single'
			>
				{textInput}
			</TextFit>
		);
	}

	return textInput;
};

export default Preview;
