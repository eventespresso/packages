import type { Disclosure } from '@eventespresso/services';
import type { EntityId } from '@eventespresso/data';
import type { Datetime } from '@eventespresso/edtr-services';
import type { FormRenderProps } from 'react-final-form';
import type { DateFormShape } from '../types';

export interface ContainerProps extends Omit<Disclosure, 'onOpen'> {
	datetimeId?: EntityId;
}

export interface ContentProps {
	entity: Datetime;
	onClose: VoidFunction;
}

export interface ContentWrapperProps extends FormRenderProps<DateFormShape> {}
