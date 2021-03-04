import type { Size } from '../';

interface Option {
	icon: React.ReactNode;
	text: string;
}

export interface UpsellProps extends Size {
	altCTALink?: string;
	altCTAStyle?: 'test';
	altCTAText?: string;
	bgColor?: 'blue' | 'green' | 'red';
	className?: string;
	cTA?: string;
	cTALink?: string;
	CTAstyle?: 'style';
	dismissBtn?: React.ReactNode;
	icon?: React.ReactNode;
	image?: string;
	imagePosition?: 'bottom' | 'left' | 'right' | 'top';
	isDismissable?: boolean;
	mainText?: string;
	mainTitle?: string;
	onClick?: VoidFunction;
	options?: Array<Option>;
	orientation?: 'vertical' | 'horizontal';
	subTitle?: string;
	templateId?: 'base' | 'compact' | 'with-bg-image' | 'with-options';
	withBorder?: boolean;
}
