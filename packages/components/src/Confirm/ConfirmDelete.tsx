import React from 'react';
import { __ } from '@eventespresso/i18n';

import type { ConfirmPropsWithButton } from './types';
import useConfirmWithButton from './useConfirmWithButton';

const ConfirmDelete: React.FC<ConfirmPropsWithButton> = (props) => {
	const title = props.title || __('Are you sure you want to delete this?');
	const confirm = useConfirmWithButton({ ...props, title });

	return confirm;
};

export default ConfirmDelete;
