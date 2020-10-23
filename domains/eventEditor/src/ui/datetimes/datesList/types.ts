import type { EntityListViewProps, EntityListItemProps } from '@eventespresso/components';
import type { Datetime, DatetimesFilterStateManager } from '@eventespresso/edtr-services';

export interface DatesListViewProps extends EntityListViewProps<DatetimesFilterStateManager> {}

export interface DateItemProps extends EntityListItemProps<Datetime> {
	adminUrl?: string;
	eventId?: number;
}
