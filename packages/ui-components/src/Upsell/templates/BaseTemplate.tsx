import classNames from 'classnames';

import { Image } from '@eventespresso/adapters';
import { Button, Heading } from '../../';
import type { UpsellProps } from '../types';

import '../style.scss';

export const BaseTemplate: React.FC<UpsellProps> = ({
	altCTAText,
	CTAText,
	image,
	imagePosition = 'right',
	mainText,
	mainTitle,
	subtitle,
	...props
}) => {
	const className = classNames(`ee-upsell--image-position-${imagePosition}`, props.className);
	const prefixClassName = 'ee-upsell--template-base';

	return (
		<div className={className}>
			{imagePosition !== 'bottom' && <Image src={image} />}
			<div>
				<Heading as='h3' className={`${prefixClassName}__main-title`}>
					{mainTitle}
				</Heading>
				<Heading as='h4' className={`${prefixClassName}__subtitle`}>
					{subtitle}
				</Heading>
				<p className={`${prefixClassName}__main-text`}>{mainText}</p>
				<div className={`${prefixClassName}__base__cta`}>
					<Button buttonType='primary' noHorizontalMargin size='small'>
						{CTAText}
					</Button>
					<Button buttonType='default' size='small'>
						{altCTAText}
					</Button>
				</div>
			</div>
			{imagePosition === 'bottom' && <Image src={image} />}
		</div>
	);
};
