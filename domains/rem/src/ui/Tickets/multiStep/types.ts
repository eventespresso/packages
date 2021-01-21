import type { FormRenderProps } from 'react-final-form';

import type { Disclosure } from '@eventespresso/utils';
import type { TicketFormShape } from '@eventespresso/edtr-services';
import type { PrevNext } from '@eventespresso/hooks';

import type { AnyObject } from '@eventespresso/utils';
import { RemTicket } from '../../../data';

export interface ContainerProps extends ContentProps, Omit<Disclosure, 'onOpen'> {}

export type OnSubmit = (fields: AnyObject) => void;

export interface ContentProps {
	entity?: RemTicket;
	onClose: VoidFunction;
	onSubmit?: OnSubmit;
}

export interface ContentBodyProps {
	steps?: PrevNext;
}

export interface ContentWrapperProps extends FormRenderProps<TicketFormShape>, ContainerProps {}
