import React from 'react';
import classNames from 'classnames';
import { ENTER } from '@wordpress/keycodes';
import { __ } from '@wordpress/i18n';

import { Tooltip } from '@eventespresso/adapters';
import { TabbableTextProps } from './types';

import './style.scss';

export const TabbableText: React.FC<TabbableTextProps> = ({ icon, onClick, richTextContent, text, ...props }) => {
	const className = classNames('ee-tabbable-text', props.className);

	const onKeyDown = (e) => {
		if (e.keyCode === ENTER) {
			onClick();
		}
	};

	const tooltip = props.tooltip || __('Click to edit...');
	const html: string | boolean = typeof text === 'string' && String(text);

	const spanProps = {
		...(richTextContent && { dangerouslySetInnerHTML: { __html: html } }),
		...(!richTextContent && {
			children: (
				<>
					{icon && icon}
					{text && text}
				</>
			),
		}),
		className,
		onClick,
		onKeyDown,
		role: 'button',
		tabIndex: 0,
	};

	return (
		<Tooltip tooltip={tooltip}>
			<span {...spanProps} />
		</Tooltip>
	);
};

export default TabbableText;
