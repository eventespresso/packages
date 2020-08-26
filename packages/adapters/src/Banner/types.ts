import type { AlertProps, IconProps } from '@chakra-ui/core';

export interface BannerProps extends AlertProps {
	description?: string;
	iconProps?: IconProps;
	title: string;
}
