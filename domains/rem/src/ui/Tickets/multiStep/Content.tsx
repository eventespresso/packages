import React, { useCallback } from 'react';

import { EspressoForm } from '@eventespresso/form';
import useTicketFormConfig from '../useTicketFormConfig';
import ContentWrapper from './ContentWrapper';
import type { ContentProps } from './types';
import { useFormState } from '../../../data';

const Content: React.FC<ContentProps> = ({ entity, onClose }) => {
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
	const formConfig = useTicketFormConfig({ onSubmit });

	return <EspressoForm {...formConfig} formWrapper={ContentWrapper} />;
};

export default Content;
