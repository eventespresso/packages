import { __ } from '@eventespresso/i18n';

import { Button, ButtonRow, ButtonType } from '@eventespresso/ui-components';

export interface FooterButtonsProps {
	onSubmit: VoidFunction;
	onReset?: VoidFunction;
	onCancel?: VoidFunction;
}

export const FooterButtons: React.FC<FooterButtonsProps> = ({ onSubmit, onReset, onCancel }) => {
	return (
		<ButtonRow fullWidth horizontalAlign='right' topBordered>
			{onReset && <Button buttonText={__('Reset')} onClick={onReset} type='reset' />}
			{onCancel && <Button buttonText={__('Cancel')} onClick={onCancel} />}
			<Button buttonText={__('Submit')} buttonType={ButtonType.PRIMARY} onClick={onSubmit} type='submit' />
		</ButtonRow>
	);
};
