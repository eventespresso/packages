import { Size } from '@eventespresso/ui-components';

export interface UpsellProps extends Size {
	altCTAText?: string;
	altCTALink?: string;
	altCTAStyle?: 'test';
	dismissable?: boolean;
	theme?: 'theme';
	orientation?: 'vertical' | 'horizontal';
	mainTitle?: string;
	subtitle?: string;
	mainText?: string;
	image?: string;
	CTA?: string;
	CTAlink?: string;
	CTAstyle?: 'style';
	template: 'basic';
}

export interface UpsellFormProps {
	onClose: VoidFunction;
	onSubmit: VoidFunction;
}
