import { AnyObject } from '@eventespresso/services';

type DateType = 'generated' | 'addition' | 'exception' | 'locked' | 'expired';

export interface DatetimesProps extends AnyObject {
	datetimes: Date[];
}

export interface DatetimeRowsProps extends AnyObject {
	datetimes: Date[];
	datetimesPage: any[];
	onClick: VoidFunction;
}

export interface DatetimeRowProps {
	date: Date;
	onClick: VoidFunction;
	number: number;
	type: DateType;
}
