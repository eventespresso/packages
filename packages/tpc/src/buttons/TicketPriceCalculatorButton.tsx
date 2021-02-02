import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Calculator } from '@eventespresso/icons';
import { IconButton, IconButtonProps } from '@eventespresso/ui-components';
import { EdtrGlobalModals, useTicketItem } from '@eventespresso/edtr-services';
import { TypeName, withIsLoaded } from '@eventespresso/services';
import { useGlobalModal } from '@eventespresso/registry';
import { isLocked } from '@eventespresso/predicates';

import type { BaseProps } from '../types';
import { useLockedTicketAction } from '../hooks';

interface TPCButtonProps extends BaseProps, IconButtonProps {}

const TicketPriceCalculatorButton: React.FC<TPCButtonProps> = ({ ticketId, ...buttonProps }) => {
	const { openWithData } = useGlobalModal<BaseProps>(EdtrGlobalModals.TPC);

	const onOpen = useCallback(() => {
		openWithData({ ticketId });
	}, [ticketId, openWithData]);

	const ticket = useTicketItem({ id: ticketId });
	const { alertContainer, showAlert } = useLockedTicketAction(ticket, 'COPY/TRASH/SHOW_TPC');

	const isTicketLocked = isLocked(ticket);

	const tooltip = __('ticket price calculator');

	return (
		<>
			<IconButton
				borderless
				icon={Calculator}
				onClick={isTicketLocked ? showAlert : onOpen}
				tooltip={tooltip}
				{...buttonProps}
			/>
			{alertContainer}
		</>
	);
};

export default withIsLoaded<TPCButtonProps>(TypeName.prices, ({ loaded, ticketId, ...buttonProps }) => {
	/* Hide price calculator unless prices are loaded */
	return loaded && <TicketPriceCalculatorButton ticketId={ticketId} {...buttonProps} />;
});
