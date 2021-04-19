import type { Datetime } from '@eventespresso/edtr-services';
import { useEntityActionsMenuItems } from '../../../hooks/entityActionsMenu';

const useDatesActionMenuItems = (datetime: Datetime): Array<React.ReactNode> => {
	return useEntityActionsMenuItems('datetime', datetime);
};

export default useDatesActionMenuItems;
