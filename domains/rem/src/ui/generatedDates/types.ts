import { FormStateManager as FSM } from '../../data';

export type DateType = 'gDate' | 'rDate' | 'exDate';

export type GeneratedDate = {
	date: Date;
	type: DateType;
	ISOStr: string; // ISO date string
};

export interface GeneratedDatetimeProps extends GeneratedDate {
	number: number;
	toggleExDate: FSM['addRDate']; // signature is same as addRDate
}

export interface GeneratedDatetimesProps {
	datetimes: Array<GeneratedDate>;
}
