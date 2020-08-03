import type { RelationalData, IntervalType } from '@eventespresso/services';

export interface RemDomData {
	relations?: RelationalData;
}

export type Intervals = { [key in IntervalType]?: string };
