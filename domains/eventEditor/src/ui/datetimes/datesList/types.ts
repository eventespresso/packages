import type { EntityListViewProps, EntityListItemProps } from '@eventespresso/components';
import type { Datetime } from '@eventespresso/edtr-services';
import type { DatetimesFilterStateManager } from '@edtrServices/filterState';

export interface DatesListViewProps extends EntityListViewProps<Datetime, DatetimesFilterStateManager> {}

export interface DateItemProps extends Required<Pick<EntityListItemProps<Datetime>, 'entity'>> {
	adminUrl?: string;
}
