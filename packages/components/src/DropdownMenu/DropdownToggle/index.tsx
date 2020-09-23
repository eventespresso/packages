import React from 'react';
import classNames from 'classnames';

import type { DropdownToggleProps } from '../types';
import { IconButton, MenuToggle } from '@eventespresso/adapters';
import { More } from '@eventespresso/icons';
import { withTooltip } from '../../withTooltip';

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
				aria-label={toggleProps?.tooltip}
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
