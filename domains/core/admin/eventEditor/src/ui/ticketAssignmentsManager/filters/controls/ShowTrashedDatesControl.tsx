import { __ } from '@eventespresso/i18n';

import { SwitchWithLabel } from '@eventespresso/ui-components';
import { FilterStateManager } from '../filterState';

type ShowTrashedDatesControlProps = Pick<FilterStateManager, 'showTrashedDates' | 'setShowTrashedDates'>;

const ShowTrashedDatesControl: React.FC<ShowTrashedDatesControlProps> = ({ showTrashedDates, setShowTrashedDates }) => {
	return (
		<SwitchWithLabel
			id='show-trashed-dates'
			isChecked={showTrashedDates}
			label={__('show trashed dates')}
			onChangeValue={setShowTrashedDates}
		/>
	);
};

export default ShowTrashedDatesControl;
