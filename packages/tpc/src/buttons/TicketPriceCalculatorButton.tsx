import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { Calculator } from '@eventespresso/icons';
import { IconButton, IconButtonProps } from '@eventespresso/components';
import { EdtrGlobalModals, useTicketItem } from '@eventespresso/edtr-services';
import { TypeName, withIsLoaded } from '@eventespresso/services';
import type { TooltipProps } from '@eventespresso/adapters';
import { useGlobalModal } from '@eventespresso/registry';
import { useMemoStringify } from '@eventespresso/hooks';

import type { BaseProps } from '../types';

interface TPCButtonProps extends BaseProps, IconButtonProps {}

const TicketPriceCalculatorButton: React.FC<TPCButtonProps> = ({ ticketId, ...buttonProps }) => {
	const { openWithData } = useGlobalModal<BaseProps>(EdtrGlobalModals.TPC);

	const tooltipProps = useMemoStringify<TooltipProps>({ placement: 'left' });

	const onOpen = useCallback(() => {
		openWithData({ ticketId });
	}, [ticketId, openWithData]);

	const ticket = useTicketItem({ id: ticketId });
	const isDisabled = Boolean(ticket?.sold);

	const tooltip = isDisabled
		? __(
				'Ticket price modifications are blocked for Tickets that have already been sold to registrants, because doing so would negatively affect internal accounting for the event. If you still need to modify ticket prices, then create a copy of those tickets, edit the prices for the new tickets, and then archive the old tickets.'
		  )
		: __('ticket price calculator');

	return (
		<IconButton
			borderless
			icon={Calculator}
			onClick={onOpen}
			tooltip={tooltip}
			tooltipProps={tooltipProps}
			isDisabled={isDisabled}
			{...buttonProps}
		/>
	);
};

export default withIsLoaded<TPCButtonProps>(TypeName.prices, ({ loaded, ticketId, ...buttonProps }) => {
	/* Hide price calculator unless prices are loaded */
	return loaded && <TicketPriceCalculatorButton ticketId={ticketId} {...buttonProps} />;
});
