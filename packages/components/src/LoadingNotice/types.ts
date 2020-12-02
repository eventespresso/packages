import type { ISpinnerProps } from '@chakra-ui/core';
import type { Size } from '../';

export interface LoadingNoticeProps extends Omit<ISpinnerProps, 'size'> {
	className?: string;
	/**
	 * Defines paddings size around spinner
	 */
	size?: Size['size'];
}
