import classNames from 'classnames';

import { MenuItem } from '@eventespresso/adapters';
import type { DropdownMenuItemProps } from './types';

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children, icon: Icon, title, ...props }) => {
	const className = classNames('ee-dropdown-menu__item', props.className);

	return (
		<MenuItem {...props} className={className} role='menuitem'>
			{Icon && <Icon />}
			<span>{children || title}</span>
		</MenuItem>
	);
};
