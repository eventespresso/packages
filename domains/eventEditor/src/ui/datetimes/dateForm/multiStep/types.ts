import type { Datetime } from '@eventespresso/edtr-services';
import type { FormRenderProps } from 'react-final-form';
import type { DateFormShape } from '../types';

export interface ContentProps {
	entity: Datetime;
	onClose: VoidFunction;
}

export interface ContentWrapperProps extends FormRenderProps<DateFormShape> {}
