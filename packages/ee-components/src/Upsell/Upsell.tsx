import classNames from 'classnames';

import { BaseTemplate, TemplateWithBg } from './templates';
import type { UpsellProps } from './types';

import './style.scss';

export const Upsell: React.FC<UpsellProps> = ({ orientation, template, withBorder, ...props }) => {
	const className = classNames(
		'ee-upsell',
		`ee-upsell--orientation-${orientation}`,
		`ee-upsell--template-${template}`,
		withBorder && `ee-upsell--with-border`
	);

	if (template === 'base') {
		return <BaseTemplate {...props} className={className} />;
	}

	if (template === 'with-bg-image') {
		return <TemplateWithBg {...props} className={className} />;
	}

	return null;
};
