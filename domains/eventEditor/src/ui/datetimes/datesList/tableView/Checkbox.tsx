import { ActionCheckbox } from '@eventespresso/ee-components';
import { useShowDatetimeBA, useVisibleDatetimeIds } from '@eventespresso/edtr-services';
import { withFeature } from '@eventespresso/services';
import type { ActionCheckboxProps } from '@eventespresso/ee-components';

const Checkbox: React.FC<ActionCheckboxProps> = (props) => {
	const [showBulkActions] = useShowDatetimeBA();
	const [visibleDatetimeIds] = useVisibleDatetimeIds();

	return showBulkActions ? <ActionCheckbox {...props} visibleEntityIds={visibleDatetimeIds} /> : null;
};

export default withFeature('use_bulk_edit')(Checkbox);
