import React from 'react';
import { __ } from '@wordpress/i18n';
import { CalendarDateSwitcher } from '@eventespresso/components';

import DateActionsMenu from '../actionsMenu/DateActionsMenu';
import { EntityActionsMenuLayout } from '@eventespresso/unknown'; // '@appLayout/entityActionsMenu';

import { getStatusTextLabel, statusBgColorClassName } from '@eventespresso/unknown'; // '@sharedEntities/datetimes/helpers';

import { EntityCard } from '@eventespresso/components';
import { useDatesListFilterState } from '@edtrServices/filterState';
import { getPropsAreEqual, useMemoStringify } from '@eventespresso/services';
import Details from './Details';
import type { DateItemProps } from '../types';

const DateCard: React.FC<DateItemProps> = ({ entity: date }) => {
	const bgClassName = statusBgColorClassName(date);
	const { displayStartOrEndDate } = useDatesListFilterState();
	const footer = getStatusTextLabel(date);
	const labels = useMemoStringify({ footer });

	return date ? (
		<EntityCard
			entity={date}
			cacheId={date.cacheId + displayStartOrEndDate}
			actionsMenu={<DateActionsMenu entity={date} layout={EntityActionsMenuLayout.Vertical} />}
			sidebar={
				<CalendarDateSwitcher
					className={bgClassName}
					displayDate={displayStartOrEndDate}
					endDate={date.endDate}
					labels={labels}
					startDate={date.startDate}
				/>
			}
			details={<Details entity={date} />}
		/>
	) : null;
};

export default React.memo(DateCard, getPropsAreEqual(['entity', 'cacheId']));
