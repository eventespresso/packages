import { forwardRef } from 'react';
import classNames from 'classnames';

import { IconButton as IconButtonAdapter } from '@eventespresso/adapters';
import { ButtonType } from '../types';
import { withLabel } from '../../withLabel';
import { withTooltip } from '../../withTooltip';
import type { IconButtonProps } from './types';

import './style.scss';

export const iconBtnClassName = 'ee-btn-base ee-icon-button';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			borderless,
			buttonType = ButtonType.DEFAULT,
			color,
			icon,
			isDisabled,
			noMargin,
			noPadding,
			onClick,
			size = 'default',
			transparentBg,
			...props
		},
		ref
	) => {
		const ariaLabel = props['aria-label'];
		const className = classNames(
			iconBtnClassName,
			color && `ee-icon-button-color--${color}`,
			borderless && 'ee-icon-button--borderless',
			buttonType !== ButtonType.DEFAULT && [`ee-btn--${buttonType}`],
			noMargin && 'ee-icon-button--no-margin',
			noPadding && 'ee-icon-button--no-padding',
			transparentBg && 'ee-icon-button--transparent-bg',
			size !== 'default' && [`ee-btn--${size}`],
			props.className
		);

		return (
			<IconButtonAdapter
				tabIndex={0}
				{...props}
				aria-label={ariaLabel}
				className={className}
				icon={icon}
				isDisabled={isDisabled}
				// disable click handler if button is disabled
				onClick={isDisabled ? null : onClick}
				ref={ref}
			/>
		);
	}
);

export default withLabel(withTooltip(IconButton));
