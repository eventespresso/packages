import { useMemo } from 'react';

import { FormWithConfig } from '@eventespresso/ee-components';

import useTicketFormConfig from '../useTicketFormConfig';
import ContextProvider from './ContextProvider';
import type { ContentProps } from './types';

const Content: React.FC<ContentProps> = ({ entityId, onClose, onSubmit }) => {
	const config = useMemo(() => ({ onSubmit }), [onSubmit]);
	const formConfig = useTicketFormConfig(entityId, config);

	return <FormWithConfig {...formConfig} formWrapper={ContextProvider} onClose={onClose} />;
};

export default Content;
