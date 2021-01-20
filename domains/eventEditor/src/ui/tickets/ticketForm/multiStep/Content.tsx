import { useMemo } from 'react';

import { FormWithConfig } from '@eventespresso/ee-components';

import useTicketFormConfig from '../useTicketFormConfig';
import ContentWrapper from './ContentWrapper';
import type { ContentProps } from './types';

const Content: React.FC<ContentProps> = ({ entityId, onSubmit }) => {
	const config = useMemo(() => ({ onSubmit }), [onSubmit]);
	const formConfig = useTicketFormConfig(entityId || 'NEW_TICKET', config);

	return <FormWithConfig {...formConfig} formWrapper={ContentWrapper} />;
};

export default Content;
