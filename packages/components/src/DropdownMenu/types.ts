import type { MenuProps, MenuItemProps, MenuToggleProps, MenuListProps } from '@eventespresso/adapters';
import type { withTooltipProps } from '../../';
import type { IconName } from '@eventespresso/icons';

export interface DropdownMenuProps extends Omit<MenuProps, 'isOpen'> {
	className?: string;
	menuListProps?: MenuListProps;
	toggleProps?: DropdownToggleProps;
}

export type DropdownMenuListProps = MenuListProps & {
	className?: string;
	isOpen: boolean;
};

export interface DropdownMenuItemProps extends MenuItemProps {
	icon?: React.ComponentType<any>;
	title?: string;
}

export interface DropdownToggleProps extends MenuToggleProps, withTooltipProps {
	borderless?: boolean;
	icon?: IconName;
	isOpen?: boolean;
	onClose?: VoidFunction;
}
