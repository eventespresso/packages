import { Menu } from '@eventespresso/adapters';
import { isRTL as getRTL } from '@eventespresso/i18n';
import { DropdownMenuList, DropdownToggle } from './';
import type { DropdownMenuProps } from './types';

import './styles.scss';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, className, menuListProps, toggleProps }) => {
	const isRTL = getRTL();
	const placement = isRTL ? 'left-start' : 'right-start';

	return (
		<div className='ee-dropdown-menu__wrapper'>
			<Menu placement={placement}>
				{({ isOpen, onClose }) => (
					<div className='ee-dropdown-menu'>
						<DropdownToggle isOpen={isOpen} onClose={onClose} {...toggleProps} />

						<DropdownMenuList className={className} {...menuListProps}>
							{children}
						</DropdownMenuList>
					</div>
				)}
			</Menu>
		</div>
	);
};
