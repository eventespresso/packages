import { useCallback } from 'react';

import { FormWithConfig } from '@eventespresso/ee-components';

import useTicketFormConfig from '../useTicketFormConfig';
import ContextProvider from './ContextProvider';
import type { ContentRendererProps } from './types';
import { useFormState } from '../../../data';

const ContentRenderer: React.FC<ContentRendererProps> = ({ entity, onClose }) => {
	const { addTicket, updateTicket } = useFormState();

	const onSubmit = useCallback(
		(values) => {
			if (entity?.id) {
				updateTicket(entity?.id, values);
			} else {
				addTicket(values);
			}
			onClose();
		},
		[addTicket, entity?.id, onClose, updateTicket]
	);
	const formConfig = useTicketFormConfig(entity, { onSubmit });

	return <FormWithConfig {...formConfig} formWrapper={ContextProvider as any} onClose={onClose} />;
};

export default ContentRenderer;
