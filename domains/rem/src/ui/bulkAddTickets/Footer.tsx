import { isEmpty } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { ButtonRow, Button, ButtonType } from '@eventespresso/ui-components';

import { useFormState } from '../../data';
import { BaseProps } from '../types';

const Footer: React.FC<BaseProps> = ({ onClose, onSubmit }) => {
	const { tickets } = useFormState();
	const isDisabled = isEmpty(tickets);

	return (
		<ButtonRow fullWidth horizontalAlign='right' topBordered>
			<Button buttonText={__('Cancel')} onClick={onClose} />
			<Button
				buttonText={__('Submit')}
				buttonType={ButtonType.PRIMARY}
				isDisabled={isDisabled}
				type='submit'
				onClick={onSubmit}
			/>
		</ButtonRow>
	);
};

export default Footer;
