import { Frequency as RRuleFrequency, WeekdayStr } from 'rrule';
import { MONTHS, DAYS } from './constants';

export type Frequency = keyof typeof RRuleFrequency;

export type RepeatMode = 'ON' | 'ON_THE';

export type EndMode = 'NEVER' | 'AFTER' | 'ON_DATE';

export type Weekday = WeekdayStr;

export interface BaseRepeatOption {
	interval: number;
}

export type Day = number | keyof typeof DAYS;

export interface RepeatOn {
	day: Day;
	month?: Month;
}

export interface RepeatOnThe extends RepeatOn {
	which: Which;
}

export type Which = 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH' | 'LAST';

export type Month = keyof typeof MONTHS;

export interface YearlyRepeatOption {
	mode: RepeatMode;
	on: RepeatOn;
	onThe: RepeatOnThe;
}

export interface MonthlyRepeatOption extends BaseRepeatOption, YearlyRepeatOption {}

export interface WeeklyRepeatOption extends BaseRepeatOption {
	days: {
		[key in Weekday]?: boolean;
	};
}

export interface StartRule {
	date?: Date;
}

export interface RepeatRule {
	frequency: Frequency;
	yearly: YearlyRepeatOption;
	monthly: MonthlyRepeatOption;
	weekly: WeeklyRepeatOption;
	daily: BaseRepeatOption;
	hourly: BaseRepeatOption;
}

export interface EndRule extends StartRule {
	mode: EndMode;
	after?: number;
}

export interface RRuleConfig {
	calendarComponent?: React.ComponentType<any>;
	enableTimepicker?: boolean;
	endModes?: Array<EndMode>;
	frequencies?: Array<Frequency>;
	locale?: string;
	maxEndDate?: Date;
	maxExecutions?: number;
	monthlyModes?: Array<RepeatMode>;
	weekStartsOn?: Weekday;
	yearlyModes?: Array<RepeatMode>;
}
