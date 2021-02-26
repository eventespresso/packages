import classNames from 'classnames';

import { Button, Heading } from '../../';
import type { UpsellProps } from '../types';

import '../style.scss';

export const TemplateWithOptions: React.FC<UpsellProps> = ({
	bgColor,
	icon,
	mainText,
	mainTitle,
	onClick,
	options,
	...props
}) => {
	const className = classNames(bgColor && `ee-upsell--bg-color ee-upsell--bg-color-${bgColor}`, props.className);
	const prefixClassName = 'ee-upsell--template-with-options';

	return (
		<div className={className}>
			<div className={`${prefixClassName}__img-wrapper`}>{icon}</div>
			<div>
				<Heading as='h3' className={`${prefixClassName}__main-title`}>
					{mainTitle}
				</Heading>
				<div className={`${prefixClassName}__options-wrapper`}>
					{options.map(({ icon, text }, index) => {
						return (
							<div key={index}>
								{icon}
								<span>{text}</span>
							</div>
						);
					})}
				</div>
				<Button buttonType='primary' noHorizontalMargin onClick={onClick} size='small'>
					{mainText}
				</Button>
			</div>
		</div>
	);
};
