import { DebugInfo } from '@eventespresso/ui-components';

import { useDataState } from '../data';

const Debug = () => {
	const { getData } = useDataState();

	return <DebugInfo data={getData()} />;
};

export default Debug;
