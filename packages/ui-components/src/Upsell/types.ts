import type { Size } from '../';

interface Option {
	icon: React.ReactNode;
	text: string;
}

export interface UpsellProps extends Size {
	altCTALink?: string;
	altCTAStyle?: 'test';
	altCTAText?: string;
	bgColor: 'blue' | 'green' | 'red';
	className?: string;
	CTAText?: string;
	CTAlink?: string;
	CTAstyle?: 'style';
	icon?: React.ReactNode;
	image?: string;
	imagePosition?: 'bottom' | 'left' | 'right' | 'top';
	isDismissable?: boolean;
	mainText?: string;
	mainTitle?: string;
	onClick?: VoidFunction;
	options?: Array<Option>;
	orientation?: 'vertical' | 'horizontal';
	subtitle?: string;
	templateId?: 'base' | 'with-bg-image' | 'with-options';
	theme?: 'theme';
	withBorder?: boolean;
}
