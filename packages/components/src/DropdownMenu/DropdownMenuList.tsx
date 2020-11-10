import React, { Children, cloneElement, useEffect } from 'react';
import classNames from 'classnames';

import { MenuList } from '@eventespresso/adapters';
import type { DropdownMenuListProps } from './types';

const DropdownMenuList: React.FC<DropdownMenuListProps> = ({ children, isOpen, placement, ...props }) => {
	const className = classNames('ee-dropdown-menu__list', props.className);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('ee-dropdown-menu__list--open');
		}

		return () => {
			document.body.classList.remove('ee-dropdown-menu__list--open');
		};
	}, [isOpen]);

	return (
		<MenuList {...props} className={className} placement={placement}>
			{Children.map(children, (child: any) => {
				return cloneElement(child);
			})}
		</MenuList>
	);
};

export default DropdownMenuList;
