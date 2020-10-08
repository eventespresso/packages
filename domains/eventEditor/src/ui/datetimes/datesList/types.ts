import type { EntityListViewProps, EntityListItemProps } from '@eventespresso/components';
import type { Datetime, DatetimesFilterStateManager } from '@eventespresso/edtr-services';

export interface DatesListViewProps extends EntityListViewProps<Datetime, DatetimesFilterStateManager> {}

export interface DateItemProps extends Required<Pick<EntityListItemProps<Datetime>, 'entity'>> {
	adminUrl?: string;
	eventId?: number;
}
