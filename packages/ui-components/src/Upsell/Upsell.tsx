import classNames from 'classnames';

import { AddNewDateTemplate, BaseTemplate, CompactTemplate, TemplateWithBg, TemplateWithOptions } from './templates';
import DismissBtn from './DismissBtn';
import type { UpsellProps } from './types';

import './style.scss';

export const Upsell: React.FC<UpsellProps> = ({ isDismissable, orientation, templateId, withBorder, ...props }) => {
	const className = classNames(
		'ee-upsell',
		orientation && `ee-upsell--orientation-${orientation}`,
		templateId && `ee-upsell--template-${templateId}`,
		withBorder && `ee-upsell--with-border`
	);

	const dismissBtn = isDismissable && <DismissBtn />;

	if (templateId === 'addNewDate') {
		return <AddNewDateTemplate {...props} className={className} orientation={orientation} />;
	}

	if (templateId === 'base') {
		return <BaseTemplate {...props} className={className} orientation={orientation} />;
	}

	if (templateId === 'compact') {
		return <CompactTemplate {...props} className={className} dismissBtn={dismissBtn} orientation={orientation} />;
	}

	if (templateId === 'with-bg-image') {
		return <TemplateWithBg {...props} className={className} />;
	}

	if (templateId === 'with-options') {
		return <TemplateWithOptions {...props} className={className} />;
	}

	return null;
};
