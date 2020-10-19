import type { FormErrorMessageProps } from '../adapters';

export interface ErrorMessageProps extends Pick<FormErrorMessageProps, 'id'> {
	message?: string;
}
