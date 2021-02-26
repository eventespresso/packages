import classNames from 'classnames';

import { BaseTemplate, TemplateWithBg, TemplateWithOptions } from './templates';
import type { UpsellProps } from './types';

import './style.scss';

export const Upsell: React.FC<UpsellProps> = ({ orientation, templateId, withBorder, ...props }) => {
	const className = classNames(
		'ee-upsell',
		`ee-upsell--orientation-${orientation}`,
		`ee-upsell--template-${templateId}`,
		withBorder && `ee-upsell--with-border`
	);

	if (templateId === 'base') {
		return <BaseTemplate {...props} className={className} orientation={orientation} />;
	}

	if (templateId === 'with-bg-image') {
		return <TemplateWithBg {...props} className={className} />;
	}

	if (templateId === 'with-options') {
		return <TemplateWithOptions {...props} className={className} />;
	}

	return null;
};
