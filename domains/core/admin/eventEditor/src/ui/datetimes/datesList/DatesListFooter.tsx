import { useDatetimes } from '@eventespresso/edtr-services';
import { EntityCacheIds } from '@eventespresso/ee-components';

import DatesListButtons from './DatesListButtons';

const DatesListFooter: React.FC = () => {
	const entities = useDatetimes();

	return (
		<>
			<EntityCacheIds entities={entities} />
			<DatesListButtons />
		</>
	);
};

export default DatesListFooter;
