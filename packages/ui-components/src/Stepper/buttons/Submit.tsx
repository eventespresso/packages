import { __ } from '@eventespresso/i18n';

import { Button, ButtonProps, ButtonType } from '../../../';
import { SaveOutlined } from '@eventespresso/icons';

const Submit: React.FC<ButtonProps> = (props) => {
	const buttonText = props.buttonText || __('Submit');

	return <Button {...props} buttonText={buttonText} buttonType={ButtonType.PRIMARY} icon={SaveOutlined} />;
};

export default Submit;
