import { __ } from '@eventespresso/i18n';

import { DropdownMenuItem } from '../../DropdownMenu';
import { Trash as TrashIcon } from '@eventespresso/icons';
import type { MenuItemProps } from './types';

const Trash: React.FC<MenuItemProps> = ({ onClick, ...props }) => {
	const title = props.title || __('trash');

	return <DropdownMenuItem {...props} icon={TrashIcon} onClick={onClick} title={title} />;
};

export default Trash;
