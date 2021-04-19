import type { FormRenderProps } from 'react-final-form';

import type { Disclosure } from '@eventespresso/utils';
import type { TicketFormShape } from '@eventespresso/edtr-services';
import type { PrevNext } from '@eventespresso/hooks';
import type { AnyObject } from '@eventespresso/utils';
import { DefaultTicket } from '../data';

export type OnSubmit = (fields: AnyObject) => void;

export interface ContentRendererProps {
	entity?: DefaultTicket;
	onClose: VoidFunction;
	onSubmit?: OnSubmit;
}

export interface ModalBodyProps {
	steps?: PrevNext;
}

export interface ContextProviderProps extends FormRenderProps<TicketFormShape>, Omit<Disclosure, 'onOpen'> {}
