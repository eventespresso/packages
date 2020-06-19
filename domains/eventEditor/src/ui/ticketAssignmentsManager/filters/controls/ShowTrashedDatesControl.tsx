import React from 'react';
import { __ } from '@wordpress/i18n';

import { SwitchInput } from '@eventespresso/components';
import { FilterStateManager } from '../filterState';

type ShowTrashedDatesControlProps = Pick<FilterStateManager, 'showTrashedDates' | 'setShowTrashedDates'>;

const ShowTrashedDatesControl: React.FC<ShowTrashedDatesControlProps> = React.memo(
	({ showTrashedDates, setShowTrashedDates }) => {
		return (
			<SwitchInput
				label={__('show trashed dates')}
				isChecked={showTrashedDates}
				onChangeValue={setShowTrashedDates}
			/>
		);
	}
);

export default ShowTrashedDatesControl;
