import React, { useCallback } from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';
import { isEnterKey } from '@eventespresso/utils';
import { Tooltip } from '../';
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

	// TODO use isDisabled prop from Tooltip in v1 in order to hide tooltip https://chakra-ui.com/docs/overlay/tooltip#disabled-tooltip
	// don't display tooltip if it is being used as placeholder
	tooltip = text === tooltip ? '' : tooltip;

	const textClassName = classNames(
		'ee-tabbable-text',
		!props.text && 'ee-tabbable-text--no-text',
		isDisabled && 'ee-tabbable-text--is-disabled',
		className
	);

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
				<span className={'ee-tabbable-text__inner_wrapper'}>{text}</span>
				{icon}
			</div>
		</Tooltip>
	);
};

export default TabbableText;
