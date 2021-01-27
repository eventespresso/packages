import classNames from 'classnames';

import { Menu } from '@eventespresso/adapters';
import { isRTL as getRTL } from '@eventespresso/i18n';

import { DropdownMenuList, DropdownToggle } from './';
import type { DropdownMenuProps } from './types';

import './styles.scss';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
	children,
	className,
	menuListProps,
	toggleProps,
	wrapperClassName,
}) => {
	const isRTL = getRTL();
	const placement = isRTL ? 'left-start' : 'right-start';

	const _wrapperClassName = classNames(wrapperClassName, 'ee-dropdown-menu__wrapper');

	return (
		<div className={_wrapperClassName}>
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
