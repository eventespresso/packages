import React, { useCallback } from 'react';
import classNames from 'classnames';
import { ENTER } from '@wordpress/keycodes';
import { __ } from '@eventespresso/i18n';

import { Tooltip } from '@eventespresso/adapters';
import type { TabbableTextProps } from './types';

import './style.scss';

export const TabbableText: React.FC<TabbableTextProps> = ({ icon, onClick, isDisabled, ...props }) => {
	let tooltip = props.tooltip || __('Click to edit…');
	const text = props.text || tooltip;
	// don't display tooltip if it is being used as placeholder
	tooltip = text === tooltip ? '' : tooltip;
	const className = classNames('ee-tabbable-text', props.className, { 'is-disabled': isDisabled });

	const onKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.keyCode === ENTER) {
				e.preventDefault();
				onClick();
			}
		},
		[onClick]
	);

	return (
		<Tooltip tooltip={tooltip}>
			<div
				aria-label={props.tooltip}
				className={className}
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
