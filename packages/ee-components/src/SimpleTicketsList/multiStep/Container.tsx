import { useCallback } from 'react';

import Content from './Content';
import { useFormState } from '../hooks';
import type { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = ({ entity, isOpen, onClose }) => {
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

	return isOpen && <Content entity={entity} onClose={onClose} onSubmit={onSubmit} />;
};

export default Container;
