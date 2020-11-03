import type { PopoverProps as ChakraPopoverProps } from '@chakra-ui/popover';

export interface PopoverProps extends Pick<ChakraPopoverProps, 'closeOnBlur' | 'isOpen' | 'onClose'> {
	className?: string;
	content: React.ReactNode;
	contentClassName?: string;
	header?: React.ReactNode;
	trigger: React.ReactNode;
}
