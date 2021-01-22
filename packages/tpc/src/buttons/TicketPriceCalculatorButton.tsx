import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';

import { Calculator } from '@eventespresso/icons';
import { IconButton, IconButtonProps } from '@eventespresso/ui-components';
import { EdtrGlobalModals, SOLD_TICKET_ERROR_MESSAGE, useTicketItem } from '@eventespresso/edtr-services';
import { TypeName, withIsLoaded } from '@eventespresso/services';
import { useGlobalModal } from '@eventespresso/registry';

import type { BaseProps } from '../types';

interface TPCButtonProps extends BaseProps, IconButtonProps {}

const TicketPriceCalculatorButton: React.FC<TPCButtonProps> = ({ ticketId, ...buttonProps }) => {
	const { openWithData } = useGlobalModal<BaseProps>(EdtrGlobalModals.TPC);

	const onOpen = useCallback(() => {
		openWithData({ ticketId });
	}, [ticketId, openWithData]);

	const ticket = useTicketItem({ id: ticketId });
	const isDisabled = Boolean(ticket?.sold);

	const tooltip = isDisabled ? SOLD_TICKET_ERROR_MESSAGE : __('ticket price calculator');

	return (
		<IconButton
			borderless
			icon={Calculator}
			onClick={isDisabled ? null : onOpen}
			tooltip={tooltip}
			{...buttonProps}
		/>
	);
};

export default withIsLoaded<TPCButtonProps>(TypeName.prices, ({ loaded, ticketId, ...buttonProps }) => {
	/* Hide price calculator unless prices are loaded */
	return loaded && <TicketPriceCalculatorButton ticketId={ticketId} {...buttonProps} />;
});
