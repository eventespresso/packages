import type { Datetime, DateFormShape } from '@eventespresso/edtr-services';
import type { FormRenderProps } from 'react-final-form';

export interface ContentProps {
	entity: Datetime;
	onClose: VoidFunction;
}

export interface ContentWrapperProps extends FormRenderProps<DateFormShape> {}
