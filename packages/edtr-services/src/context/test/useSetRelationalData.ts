import { useEffect } from 'react';
import { useRelations } from '@eventespresso/services';
import './data';

const useSetRelationalData = (): void => {
	const { initialize } = useRelations();

	useEffect(() => {
		initialize(window.eeEditorData.event.relations);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useSetRelationalData;
