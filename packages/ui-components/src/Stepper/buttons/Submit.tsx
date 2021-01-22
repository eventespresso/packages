import { __ } from '@eventespresso/i18n';
import { SaveOutlined } from '@eventespresso/icons';

import { Button, ButtonProps, ButtonType } from '../../../';

const Submit: React.FC<ButtonProps> = (props) => {
	const buttonText = props.buttonText || __('Submit');

	return (
		<Button buttonText={buttonText} buttonType={ButtonType.PRIMARY} icon={SaveOutlined} type='submit' {...props} />
	);
};

export default Submit;
