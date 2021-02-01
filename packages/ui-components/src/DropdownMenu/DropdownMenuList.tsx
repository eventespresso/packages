import { Children, cloneElement } from 'react';

import classNames from 'classnames';
import { MenuList, MenuListProps } from '@eventespresso/adapters';

export const DropdownMenuList: React.FC<MenuListProps> = ({ children, ...props }) => {
	const className = classNames('ee-dropdown-menu__list', props.className);

	const items = Children.toArray(children).filter(Boolean);

	return (
		<MenuList {...props} className={className}>
			{Children.map(items, (child: any) => {
				return cloneElement(child);
			})}
		</MenuList>
	);
};
