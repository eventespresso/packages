import React from 'react';
import { __ } from '@wordpress/i18n';

import { Button, ButtonRow, ButtonType } from '@eventespresso/components';

export interface FooterButtonsProps {
	onSubmit: VoidFunction;
	onReset: VoidFunction;
}

export const FooterButtons: React.FC<FooterButtonsProps> = ({ onSubmit, onReset }) => {
	return (
		<ButtonRow rightAligned topBordered>
			<Button buttonText={__('Reset')} onClick={onReset} type='reset' />
			<Button buttonText={__('Submit')} buttonType={ButtonType.PRIMARY} onClick={onSubmit} type='submit' />
		</ButtonRow>
	);
};
