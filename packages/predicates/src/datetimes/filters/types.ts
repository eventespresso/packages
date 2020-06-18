import { Datetime, DatetimeSales, DatetimeStatus } from '@eventespresso/edtr-services';

export type DatetimeFilterFn = (dates: Array<Datetime>) => Array<Datetime>;

export interface DatesSalesFilter {
	dates: Datetime[];
	sales: DatetimeSales;
}

export interface DatesStatusFilter {
	dates: Datetime[];
	status: DatetimeStatus;
}
