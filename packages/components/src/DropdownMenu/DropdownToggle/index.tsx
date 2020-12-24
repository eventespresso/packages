import React from 'react';
import classNames from 'classnames';

import { MenuToggle } from '@eventespresso/adapters';
import { More } from '@eventespresso/icons';

import { IconButton } from '../../';
import type { DropdownToggleProps } from '../types';
import './styles.scss';

export const DropdownToggle = React.forwardRef<HTMLButtonElement, DropdownToggleProps>(
	({ borderless = true, icon = More, isOpen, tooltip, ...props }, ref) => {
		const className = classNames(
			'ee-dropdown-menu__toggle',
			isOpen && 'ee-dropdown-menu__toggle--open',
			borderless && 'ee-icon-button--borderless',
			props.className
		);

		return (
			<MenuToggle aria-label={tooltip} as='div' className={className} ref={ref}>
				<IconButton icon={icon} tooltip={tooltip} />
			</MenuToggle>
		);
	}
);
