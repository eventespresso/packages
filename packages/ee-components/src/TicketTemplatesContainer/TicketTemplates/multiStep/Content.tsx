import { useCallback } from 'react';

import { FormWithConfig } from '../../../';
import useTicketFormConfig from '../useTicketFormConfig';
import ContentWrapper from './ContentWrapper';
import type { ContentProps } from './types';

const Content: React.FC<ContentProps> = ({ addTicket, entity, onClose, updateTicket }) => {
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

	return <FormWithConfig {...formConfig} formWrapper={ContentWrapper} />;
};

export default Content;
