import React from 'react';
import { Frequency as RRuleFrequency, WeekdayStr } from 'rrule';

export type Frequency = keyof typeof RRuleFrequency;

export type RepeatMode = 'ON' | 'ON_THE';

export type EndMode = 'NEVER' | 'AFTER' | 'ON_DATE';

export type Weekday = WeekdayStr;

interface BaseRepeatOption {
	interval: number;
}

interface RepeatOn {
	day: number | Weekday;
	month?: Month;
}

interface RepeatOnThe extends RepeatOn {
	which: Which;
}

type Which = 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH' | 'LAST';

type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

interface YearlyRepeatOption {
	mode: RepeatMode;
	on: RepeatOn;
	onThe: RepeatOnThe;
}

interface MonthlyRepeatOption extends BaseRepeatOption, YearlyRepeatOption {}

interface WeeklyRepeatOption extends BaseRepeatOption {
	days: {
		[key in Weekday]?: boolean;
	};
}

export interface StartRule {
	date?: Date;
	options?: {
		weekStartsOn: Weekday;
	};
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
	frequency?: Array<Frequency>;
	yearlyMode?: RepeatMode;
	monthlyMode?: RepeatMode;
	endModes?: Array<EndMode>;
	weekStartsOn?: Weekday;
	enableTimepicker?: boolean;
	locale?: string;
	calendarComponent?: React.ComponentType<any>;
}
