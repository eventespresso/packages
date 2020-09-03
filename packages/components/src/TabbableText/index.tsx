import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { ENTER } from '@wordpress/keycodes';
import { __ } from '@wordpress/i18n';

import { Tooltip } from '@eventespresso/adapters';
import { TabbableTextProps } from './types';

import './style.scss';

export const TabbableText: React.FC<TabbableTextProps> = ({ icon, onClick, richTextContent, ...props }) => {
	let tooltip = props.tooltip || __('Click to edit...');
	const text = props.text || tooltip;
	// don't display tooltip if it is being used as placeholder
	tooltip = text === tooltip ? '' : tooltip;
	const className = classNames('ee-tabbable-text', props.className);

	const onKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.keyCode === ENTER) {
				onClick();
			}
		},
		[onClick]
	);

	const spanProps = useMemo(() => {
		const html: string | boolean = typeof text === 'string' && String(text);
		return {
			...(richTextContent && { dangerouslySetInnerHTML: { __html: html } }),
			...(!richTextContent && {
				children: text,
			}),
		};
	}, [richTextContent, text]);

	return (
		<Tooltip tooltip={tooltip}>
			<div className={className} onClick={onClick} onKeyDown={onKeyDown} role='button' tabIndex={0}>
				<span {...spanProps} />
				{icon}
			</div>
		</Tooltip>
	);
};

export default TabbableText;
