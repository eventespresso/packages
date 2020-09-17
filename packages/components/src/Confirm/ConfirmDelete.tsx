import React from 'react';
import { __ } from '@eventespresso/i18n';

import type { ConfirmProps } from './types';
import useConfirmWithButton from './useConfirmWithButton';

const ConfirmDelete: React.FC<ConfirmProps> = (props) => {
	const title = props.title || __('Are you sure you want to delete this?');
	const confirm = useConfirmWithButton({ ...props, title });

	return confirm;
};

export default ConfirmDelete;
