import React from 'react';
import { __ } from '@wordpress/i18n';

import { Button, ButtonRow, ButtonType } from '@eventespresso/components';

export interface FooterButtonsProps {
	onSubmit: VoidFunction;
	onReset?: VoidFunction;
	onCancel?: VoidFunction;
}

export const FooterButtons: React.FC<FooterButtonsProps> = ({ onSubmit, onReset, onCancel }) => {
	return (
		<ButtonRow align='right' topBordered>
			{onReset && <Button buttonText={__('Reset')} onClick={onReset} type='reset' />}
			{onCancel && <Button buttonText={__('Cancel')} onClick={onCancel} />}
			<Button buttonText={__('Submit')} buttonType={ButtonType.PRIMARY} onClick={onSubmit} type='submit' />
		</ButtonRow>
	);
};
