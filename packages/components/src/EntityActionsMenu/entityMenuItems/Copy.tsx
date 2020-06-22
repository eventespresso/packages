import React from 'react';
import { __ } from '@wordpress/i18n';

import { DropdownMenuItem } from '../../DropdownMenu';
import { Copy as CopyIcon } from '@eventespresso/icons';
import { MenuItemProps } from './types';

const Copy: React.FC<MenuItemProps> = ({ onClick, ...props }) => {
	const title = props.title || __('copy');
	return <DropdownMenuItem {...props} icon={CopyIcon} onClick={onClick} title={title} />;
};

export default Copy;
