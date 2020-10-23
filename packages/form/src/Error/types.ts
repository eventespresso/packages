import type { FormErrorMessageProps } from '@eventespresso/adapters';

export interface ErrorMessageProps extends Pick<FormErrorMessageProps, 'id'> {
	message?: string;
}
