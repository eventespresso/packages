import React from 'react';

import { ButtonRow } from '@eventespresso/components';

import ResetButton from './ResetButton';
import SubmitButton from './SubmitButton';

export interface FooterButtonsProps {
	onSubmit: VoidFunction;
	onReset: VoidFunction;
}

export const FooterButtons: React.FC<FooterButtonsProps> = ({ onSubmit, onReset }) => {
	return (
		<ButtonRow rightAligned topBordered>
			<ResetButton onClick={onReset} />
			<SubmitButton onClose={onSubmit} />
		</ButtonRow>
	);
};
