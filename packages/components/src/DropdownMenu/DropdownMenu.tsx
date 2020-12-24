import React from 'react';

import { Menu } from '@eventespresso/adapters';
import { DropdownMenuList, DropdownToggle } from './';
import type { DropdownMenuProps } from './types';

import './styles.scss';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, className, menuListProps, toggleProps }) => {
	return (
		<Menu placement='left-start'>
			{({ isOpen, onClose }) => (
				<div className='ee-dropdown-menu'>
					<DropdownToggle isOpen={isOpen} onClose={onClose} {...toggleProps} />

					<DropdownMenuList className={className} {...menuListProps}>
						{children}
					</DropdownMenuList>
				</div>
			)}
		</Menu>
	);
};
