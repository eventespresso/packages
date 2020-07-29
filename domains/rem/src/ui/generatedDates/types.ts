import { FormStateManager as FSM } from '../../data';

export type GeneratedDate = {
	date: Date;
	type: DateType;
	ISOStr: string; // ISO date string
};

export type DateType = 'gDate' | 'rDate' | 'exDate';

export interface DatetimesProps {
	datetimes: Array<GeneratedDate>;
}

export interface DatetimeRowsProps extends DatetimesProps {
	datetimesPage?: any[];
}

export interface DatetimeRowProps {
	date: string;
	number: number;
	type: DateType;
	toggleExDate: FSM['addRDate']; // signature is same as addRDate
}
