import type { AlertProps, AlertIconProps } from '@chakra-ui/react';

export interface BannerProps extends Pick<AlertProps, 'className' | 'status' | 'variant'> {
	description?: string;
	icon?: React.ReactNode;
	iconProps?: AlertIconProps;
	title: string;
}
