import classNames from 'classnames';

import { Clickable } from '@eventespresso/adapters';
import { Heading } from '@eventespresso/ui-components';
import type { UpsellProps } from '../types';

import '../style.scss';

export const TemplateWithBg: React.FC<UpsellProps> = ({ bgColor, icon, mainText, mainTitle, onClick, ...props }) => {
	const className = classNames(bgColor && `ee-upsell--bg-color ee-upsell--bg-color-${bgColor}`, props.className);
	const prefixClassName = 'ee-upsell--template-with-bg-image';

	return (
		<Clickable className={className} onClick={onClick}>
			<div>
				<Heading as='h3' className={`${prefixClassName}__main-title`}>
					{mainTitle}
				</Heading>
				<p className={`${prefixClassName}__main-text`}>{mainText}</p>
			</div>
			<div className={`${prefixClassName}__img-wrapper`}>{icon}</div>
		</Clickable>
	);
};
