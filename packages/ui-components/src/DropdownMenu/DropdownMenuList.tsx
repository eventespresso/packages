import { Children, cloneElement } from 'react';
import classNames from 'classnames';

import { MenuList, MenuListProps } from '@eventespresso/adapters';
import { cleanChildren } from '@eventespresso/utils';

export const DropdownMenuList: React.FC<MenuListProps> = ({ children, ...props }) => {
	const className = classNames('ee-dropdown-menu__list', props.className);

	return (
		<MenuList {...props} className={className}>
			{Children.map(cleanChildren(children), (child: any) => {
				return cloneElement(child);
			})}
		</MenuList>
	);
};
