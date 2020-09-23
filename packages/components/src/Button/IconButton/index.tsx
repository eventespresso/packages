import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { IconButton as IconButtonAdapter } from '@eventespresso/adapters';
import type { IconButtonProps } from './types';
import { ButtonSize, ButtonType } from '../types';
import { withLabel } from '../../withLabel';
import { withTooltip } from '../../withTooltip';

import './style.scss';

type BtnType = React.ComponentType<IconButtonProps>;

export const iconBtnClassName = 'ee-btn-base ee-icon-button';

const IconButton = forwardRef<typeof IconButtonAdapter, IconButtonProps>(
	(
		{
			borderless,
			buttonSize = ButtonSize.DEFAULT,
			buttonType = ButtonType.DEFAULT,
			color,
			icon,
			onClick,
			...props
		},
		ref
	) => {
		const ariaLabel = props['aria-label'] || props.label || props.tooltip;
		const className = classNames(
			iconBtnClassName,
			props.className,
			color && `ee-icon-button-color--${color}`,
			borderless && 'ee-icon-button--borderless',
			buttonSize !== ButtonSize.DEFAULT && [`ee-btn--${buttonSize}`],
			buttonType !== ButtonType.DEFAULT && [`ee-btn--${buttonType}`]
		);

		return (
			<IconButtonAdapter
				{...props}
				aria-label={ariaLabel}
				className={className}
				icon={icon}
				onClick={onClick}
				tabIndex={0}
				ref={ref}
			/>
		);
	}
);

export default withLabel(withTooltip(IconButton as BtnType) as BtnType);
