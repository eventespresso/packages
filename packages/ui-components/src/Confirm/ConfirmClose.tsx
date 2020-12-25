import { __ } from '@eventespresso/i18n';

import useConfirmWithButton from './useConfirmWithButton';
import type { ConfirmPropsWithButton } from './types';

const ConfirmClose: React.FC<ConfirmPropsWithButton> = (props) => {
	const title = props.title || __('Are you sure you want to close this?');
	const confirm = useConfirmWithButton({ ...props, title });

	return confirm;
};

export default ConfirmClose;
