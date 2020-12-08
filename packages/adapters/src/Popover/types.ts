import type { PopoverProps as ChakraPopoverProps } from '@chakra-ui/core';

export interface PopoverProps extends Pick<ChakraPopoverProps, 'closeOnBlur' | 'isOpen' | 'onClose' | 'placement'> {
	className?: string;
	content: React.ReactNode;
	contentClassName?: string;
	header?: React.ReactNode;
	trigger: React.ReactNode;
}
