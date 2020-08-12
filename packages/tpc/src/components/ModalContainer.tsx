import React, { useMemo } from 'react';

import TicketPriceCalculatorModal from './TicketPriceCalculatorModal';
import type { ModalContainerProps } from '../types';
import { withContext } from '../context';

const ModalContainer: React.FC<ModalContainerProps> = ({ isOpen, onClose, ...props }) => {
	const contextProps = useMemo(() => ({ ...props, onClose }), [onClose, props]);
	if (!isOpen) {
		return null;
	}
	const Component = withContext(TicketPriceCalculatorModal, contextProps);
	return <Component {...props} />;
};

export default ModalContainer;
