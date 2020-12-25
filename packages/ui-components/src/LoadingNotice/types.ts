import type { SpinnerProps } from '@eventespresso/adapters';
import type { Size } from '../';

export interface LoadingNoticeProps extends Omit<SpinnerProps, 'size'> {
	className?: string;
	/**
	 * Defines paddings size around spinner
	 */
	size?: Size['size'];
}
