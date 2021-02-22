// import classNames from 'classnames';

import { Image } from '@eventespresso/adapters';
import { Button, Heading } from '@eventespresso/ui-components';
import type { UpsellProps } from '../types';

import '../style.scss';

export const BaseTemplate: React.FC<UpsellProps> = ({ className, image, mainText, mainTitle, subtitle }) =>
	// {
	// altCTAText,
	// altCTALink,
	// altCTAStyle,
	// dismissable,
	// theme,
	// orientation,	 ,
	// mainText,
	// image,
	// CTA,
	// CTAlink,
	// CTAstyle,
	// template,
	// ...props
	// }
	{
		// const className = classNames('ee-upsell', props.className);
		const prefixClassName = 'ee-upsell--template-base';

		return (
			<div className={className}>
				<div>
					<Heading as='h1' className={`${prefixClassName}__main-title`}>
						{mainTitle}
					</Heading>
					<Heading as='h2' className={`${prefixClassName}__subtitle`}>
						{subtitle}
					</Heading>
					<p className={`${prefixClassName}__main-text`}>{mainText}</p>
					<div className={`${prefixClassName}__base__cta`}>
						<Button buttonType='primary' size='small'>
							primary
						</Button>
						<Button buttonType='default' size='small'>
							default
						</Button>
					</div>
				</div>
				<div>
					<Image src={image} />
				</div>
			</div>
		);
	};
