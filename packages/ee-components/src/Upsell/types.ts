import { Size } from '@eventespresso/ui-components';

export interface UpsellProps extends Size {
	altCTALink?: string;
	altCTAStyle?: 'test';
	altCTAText?: string;
	bgColor: 'green';
	className?: string;
	CTAText?: string;
	CTAlink?: string;
	CTAstyle?: 'style';
	dismissable?: boolean;
	icon?: React.ReactNode;
	image?: string;
	imagePosition?: 'bottom' | 'left' | 'right' | 'top';
	mainText?: string;
	mainTitle?: string;
	onClick?: VoidFunction;
	orientation?: 'vertical' | 'horizontal';
	subtitle?: string;
	template?: 'base' | 'with-bg-image';
	theme?: 'theme';
}

export interface UpsellFormProps {
	onClose: VoidFunction;
	onSubmit: VoidFunction;
}
