import React from 'react';
import Dotdotdot from 'react-dotdotdot';

import { Badge, TextFit } from '@eventespresso/adapters';
import { Edit } from '@eventespresso/icons';

import { TabbableText } from '../index';
import type { PreviewProps } from './types';

import './style.scss';

const Preview: React.FC<PreviewProps> = ({
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

	const textInput = (
		<div className='preview-wrapper'>
			<Badge className='badge'>
				<Edit />
			</Badge>
			<TabbableText bottomBorderDashed onClick={onRequestEdit} text={value} tooltip={tooltip} />
		</div>
	);

	if (lineCount && value.length > lineLength) {
		return <Dotdotdot clamp={lineCount}>{textInput}</Dotdotdot>;
	}

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
