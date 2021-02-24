import classNames from 'classnames';

import { BaseTemplate, TemplateWithBg } from './templates';
import type { UpsellProps } from './types';

import './style.scss';

export const Upsell: React.FC<UpsellProps> = ({ template, ...props }) => {
	const className = classNames('ee-upsell', `ee-upsell--template-${template}`);

	if (template === 'base') {
		return <BaseTemplate {...props} className={className} />;
	}

	if (template === 'with-bg-image') {
		return <TemplateWithBg {...props} className={className} />;
	}

	return null;
};
