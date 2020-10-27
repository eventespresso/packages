import React, { useCallback } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { Tooltip } from '@eventespresso/adapters';
import { isEnterKey } from '@eventespresso/utils';
import type { TabbableTextProps } from './types';

import './style.scss';

export const TabbableText: React.FC<TabbableTextProps> = ({
	'aria-describedby': ariaDescribedby,
	className,
	icon,
	onClick,
	isDisabled,
	...props
}) => {
	let tooltip = props.tooltip || __('Click to edit…');
	const text = props.text || tooltip;
	// don't display tooltip if it is being used as placeholder
	tooltip = text === tooltip ? '' : tooltip;
	const textClassName = classNames('ee-tabbable-text', className, isDisabled && 'is-disabled');

	const onKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (isEnterKey(e)) {
				e.preventDefault();
				onClick();
			}
		},
		[onClick]
	);

	return (
		<Tooltip tooltip={tooltip}>
			<div
				aria-describedby={ariaDescribedby}
				aria-label={props.tooltip}
				className={textClassName}
				onClick={onClick}
				onKeyDown={onKeyDown}
				role={isDisabled ? null : 'button'}
				tabIndex={isDisabled ? -1 : 0}
			>
				{text}
				{icon}
			</div>
		</Tooltip>
	);
};

export default TabbableText;
