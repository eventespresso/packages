import type { Disclosure } from '@eventespresso/services';
import type { FormRenderProps } from 'react-final-form';
import { RemTicket } from '../../../data';

export interface ContainerProps extends ContentProps, Omit<Disclosure, 'onOpen'> {}

export interface ContentProps {
	entity?: RemTicket;
	onClose: VoidFunction;
}

export interface ContentWrapperProps extends FormRenderProps<RemTicket> {}
