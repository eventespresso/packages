import { __ } from '@eventespresso/i18n';
import { Undo } from '@eventespresso/icons';

import { DropdownMenuItem } from '../../DropdownMenu';
import type { MenuItemProps } from './types';

const Untrash: React.FC<MenuItemProps> = ({ onClick, ...props }) => {
	const title = props.title || __('untrash');

	return <DropdownMenuItem {...props} icon={Undo} onClick={onClick} title={title} />;
};

export default Untrash;
