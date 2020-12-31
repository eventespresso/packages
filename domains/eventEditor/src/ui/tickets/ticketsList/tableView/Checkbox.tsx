import { ActionCheckbox } from '@eventespresso/ee-components';
import { useShowTicketBA, useVisibleTicketIds } from '@eventespresso/edtr-services';
import { withFeature } from '@eventespresso/services';
import type { ActionCheckboxProps } from '@eventespresso/ee-components';

const Checkbox: React.FC<ActionCheckboxProps> = (props) => {
	const [showBulkActions] = useShowTicketBA();
	const [visibleTicketIds] = useVisibleTicketIds();

	return showBulkActions ? <ActionCheckbox {...props} visibleEntityIds={visibleTicketIds} /> : null;
};

export default withFeature('use_bulk_edit')(Checkbox);
