import classNames from 'classnames';

import { Button, Heading } from '@eventespresso/ui-components';
import type { UpsellProps } from '../types';

import '../style.scss';

export const TemplateWithBg: React.FC<UpsellProps> = ({ bgColor, icon, mainText, mainTitle, onClick, ...props }) => {
	const className = classNames(bgColor && `ee-upsell--bg-color ee-upsell--bg-color-${bgColor}`, props.className);
	const prefixClassName = 'ee-upsell--template-with-bg-image';

	return (
		<div className={className}>
			<div>
				<Heading as='h3' className={`${prefixClassName}__main-title`}>
					{mainTitle}
				</Heading>
				<Button buttonType='primary' noHorizontalMargin onClick={onClick} size='small'>
					{mainText}
				</Button>
			</div>
			<div className={`${prefixClassName}__img-wrapper`}>{icon}</div>
		</div>
	);
};
