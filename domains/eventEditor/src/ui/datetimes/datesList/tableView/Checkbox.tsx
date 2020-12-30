import { ActionCheckbox } from '@eventespresso/ee-components';
import { useDatesListFilterState, useVisibleDatetimeIds } from '@eventespresso/edtr-services';
import { withFeature } from '@eventespresso/services';
import type { ActionCheckboxProps } from '@eventespresso/ee-components';

const Checkbox: React.FC<ActionCheckboxProps> = (props) => {
	const [visibleDatetimeIds] = useVisibleDatetimeIds();
	const { showBulkActions } = useDatesListFilterState();

	return showBulkActions ? <ActionCheckbox {...props} visibleEntityIds={visibleDatetimeIds} /> : null;
};

export default withFeature('use_bulk_edit')(Checkbox);
