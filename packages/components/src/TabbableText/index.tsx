import React, { useMemo } from 'react';
import classNames from 'classnames';
import { ENTER } from '@wordpress/keycodes';
import { __ } from '@wordpress/i18n';

import { Tooltip } from '@eventespresso/adapters';
import { TabbableTextProps } from './types';

import './style.scss';

export const TabbableText: React.FC<TabbableTextProps> = ({ icon, onClick, richTextContent, text, ...props }) => {
	const tooltip = props.tooltip || __('Click to edit...');

	const spanProps = useMemo(() => {
		const className = classNames('ee-tabbable-text', props.className);

		const html: string | boolean = typeof text === 'string' && String(text);

		const onKeyDown = (e) => {
			if (e.keyCode === ENTER) {
				onClick();
			}
		};

		return {
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
	}, [icon, onClick, props.className, richTextContent, text]);

	return (
		<Tooltip tooltip={tooltip}>
			<span {...spanProps} />
		</Tooltip>
	);
};

export default TabbableText;
