import type { AlertProps, IconProps } from '@chakra-ui/core';

export interface BannerProps extends Pick<AlertProps, 'className' | 'status' | 'variant'> {
	description?: string;
	iconProps?: IconProps;
	title: string;
}
