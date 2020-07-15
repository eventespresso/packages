import React from 'react';

import { Dotdotdot } from '@eventespresso/adapters';
import type { TextAreaProps } from './types';
import { InlineEdit, InlineEditPreviewProps } from '@eventespresso/adapters';

const Preview: React.FC<InlineEditPreviewProps> = ({ value, onRequestEdit, isEditing }) => {
	if (isEditing) {
		return null;
	}

	return (
		<Dotdotdot clamp={3}>
			<span onClick={onRequestEdit} onKeyDown={onRequestEdit} role='button' tabIndex={0}>
				{value}
			</span>
		</Dotdotdot>
	);
};

const InlineEditTextArea: React.FC<TextAreaProps> = ({ ...rest }) => {
	return <InlineEdit placeholder='' {...rest} inputType='textarea' Preview={Preview} />;
};

export default InlineEditTextArea;
