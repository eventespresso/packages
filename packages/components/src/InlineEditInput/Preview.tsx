import React from 'react';
import Dotdotdot from 'react-dotdotdot';

import { TextFit } from '@eventespresso/adapters';
import TabbableText from './TabbableText';
import { PreviewProps } from './types';

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

	const textInput = <TabbableText onRequestEdit={onRequestEdit} text={value} tooltip={tooltip} />;

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
