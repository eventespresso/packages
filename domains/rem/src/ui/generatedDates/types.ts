import { AnyObject } from '@eventespresso/services';
import { FormStateManager as FSM } from '../../data';

type DateType = 'generated' | 'addition' | 'exception' | 'locked' | 'expired';

export interface DatetimesProps extends AnyObject {
	datetimes: string[];
}

export interface DatetimeRowsProps extends AnyObject {
	datetimes: string[];
	datetimesPage: any[];
}

export interface DatetimeRowProps {
	date: string;
	number: number;
	type: DateType;
	toggleExDate: FSM['addRDate']; // signature is same as addRDate
}
