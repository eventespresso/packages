import type { ISpinnerProps } from '@chakra-ui/core';
import type { Size } from '../';

export interface LoadingNoticeProps extends Omit<ISpinnerProps, 'size'>, Size {
	className?: string;
}
