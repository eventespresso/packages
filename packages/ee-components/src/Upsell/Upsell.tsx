import classNames from 'classnames';

import { BaseTemplate } from './templates';
import type { UpsellProps } from './types';

import './style.scss';

export const Upsell: React.FC<UpsellProps> = ({
	// altCTAText,
	// altCTALink,
	// altCTAStyle,
	// dismissable,
	// theme,
	// orientation,
	// mainTitle,
	// subtitle,
	// mainText,
	// image,
	// CTA,
	// CTAlink,
	// CTAstyle,
	template,
	...props
}) => {
	const className = classNames('ee-upsell', `ee-upsell--template-${template}`);

	if (template === 'base') {
		return <BaseTemplate {...props} className={className} />;
	}

	return null;
};
