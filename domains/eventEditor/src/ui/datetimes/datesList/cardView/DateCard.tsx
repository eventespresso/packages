import React from 'react';

import DateActionsMenu from '../actionsMenu/DateActionsMenu';
import { EntityActionsMenuLayout } from '@eventespresso/components';
import { datetimeStatusBgColorClassName } from '@eventespresso/helpers';
import { EntityCard } from '@eventespresso/components';
import { useDatesListFilterState } from '@edtrServices/filterState';
import { getPropsAreEqual } from '@eventespresso/services';
import DateCardSidebar from './DateCardSidebar';
import Details from './Details';
import type { DateItemProps } from '../types';

const DateCard: React.FC<DateItemProps> = ({ entity: date }) => {
	const { displayStartOrEndDate } = useDatesListFilterState();
	const bgClassName = datetimeStatusBgColorClassName(date);

	return date ? (
		<EntityCard
			actionsMenu={<DateActionsMenu entity={date} layout={EntityActionsMenuLayout.Vertical} />}
			cacheId={date.cacheId + displayStartOrEndDate}
			details={<Details entity={date} />}
			entity={date}
			sidebar={<DateCardSidebar entity={date} />}
			sidebarClass={bgClassName}
		/>
	) : null;
};

export default React.memo(DateCard, getPropsAreEqual(['entity', 'cacheId']));
