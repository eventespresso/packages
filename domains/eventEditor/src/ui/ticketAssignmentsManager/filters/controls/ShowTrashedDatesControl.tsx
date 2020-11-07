import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Switch } from '@eventespresso/components';
import { FilterStateManager } from '../filterState';

type ShowTrashedDatesControlProps = Pick<FilterStateManager, 'showTrashedDates' | 'setShowTrashedDates'>;

const ShowTrashedDatesControl: React.FC<ShowTrashedDatesControlProps> = ({ showTrashedDates, setShowTrashedDates }) => {
	return <Switch label={__('show trashed dates')} checked={showTrashedDates} onChangeValue={setShowTrashedDates} />;
};

export default ShowTrashedDatesControl;
