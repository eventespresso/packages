import type { UpdateDatetimeInput, DateAndTime} from '@eventespresso/edtr-services';

export interface DateFormShape extends UpdateDatetimeInput, DateAndTime {
	dateTime?: DateAndTime;
}
