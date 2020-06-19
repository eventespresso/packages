import React from 'react';
import classNames from 'classnames';

import { DropdownToggleProps } from '../types';
import { IconButton, MenuToggle } from '@eventespresso/adapters';
import { More } from '@eventespresso/icons';
import { withTooltip } from '../../../';

import './style.scss';

const DropdownToggle = React.forwardRef<typeof MenuToggle, DropdownToggleProps>(
	({ borderless = true, icon = More, isOpen, ...toggleProps }, ref) => {
		const className = classNames(
			toggleProps.className,
			'ee-dropdown-menu__toggle',
			isOpen && 'ee-dropdown-menu__toggle--open',
			borderless && 'ee-icon-button--borderless'
		);

		return (
			<MenuToggle
				as={IconButton}
				// @ts-ignore
				icon={More}
				{...toggleProps}
				className={className}
				ref={ref}
			/>
		);
	}
);

export default withTooltip(DropdownToggle);
