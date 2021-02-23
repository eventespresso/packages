import { Size } from '@eventespresso/ui-components';

export interface UpsellProps extends Size {
	altCTALink?: string;
	altCTAStyle?: 'test';
	altCTAText?: string;
	className?: string;
	CTAText?: string;
	CTAlink?: string;
	CTAstyle?: 'style';
	dismissable?: boolean;
	image?: string;
	imagePosition?: 'bottom' | 'left' | 'right' | 'top';
	mainText?: string;
	mainTitle?: string;
	orientation?: 'vertical' | 'horizontal';
	subtitle?: string;
	template?: 'base';
	theme?: 'theme';
}

export interface UpsellFormProps {
	onClose: VoidFunction;
	onSubmit: VoidFunction;
}
