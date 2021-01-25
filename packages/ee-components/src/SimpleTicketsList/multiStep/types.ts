import type { FormRenderProps } from 'react-final-form';

import type { Disclosure } from '@eventespresso/utils';
import type { Entity } from '@eventespresso/data';
import type { TicketFormShape } from '@eventespresso/edtr-services';
import type { PrevNext } from '@eventespresso/hooks';
import type { AnyObject } from '@eventespresso/utils';

interface Ticket extends Entity {}

export interface ContainerProps
	extends ContentProps,
		Omit<Disclosure, 'onOpen'>,
		Pick<ContentBodyProps, 'StepRender'> {}

export type OnSubmit = (fields: AnyObject) => void;

export interface ContentProps {
	entity?: Ticket;
	onClose: VoidFunction;
	onSubmit?: OnSubmit;
}

export interface ContentBodyProps {
	steps?: PrevNext;
	StepRender: React.ComponentType<any>;
}

export interface ContentWrapperProps
	extends ContainerProps,
		FormRenderProps<TicketFormShape>,
		Pick<ContentBodyProps, 'StepRender'> {}
