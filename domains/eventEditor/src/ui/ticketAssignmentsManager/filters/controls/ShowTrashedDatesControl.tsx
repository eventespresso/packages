import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Switch } from '@eventespresso/components';
import { FilterStateManager } from '../filterState';

type ShowTrashedDatesControlProps = Pick<FilterStateManager, 'showTrashedDates' | 'setShowTrashedDates'>;

const ShowTrashedDatesControl: React.FC<ShowTrashedDatesControlProps> = ({ showTrashedDates, setShowTrashedDates }) => {
	return <Switch checked={showTrashedDates} label={__('show trashed dates')} onChangeValue={setShowTrashedDates} />;
};

export default ShowTrashedDatesControl;
