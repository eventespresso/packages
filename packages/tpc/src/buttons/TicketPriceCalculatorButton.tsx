import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { Calculator } from '@eventespresso/icons';
import { IconButton, IconButtonProps } from '@eventespresso/components';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';
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

	return (
		<IconButton
			borderless
			icon={Calculator}
			onClick={onOpen}
			tooltip={__('ticket price calculator')}
			tooltipProps={tooltipProps}
			{...buttonProps}
		/>
	);
};

export default withIsLoaded<TPCButtonProps>(TypeName.prices, ({ loaded, ticketId, ...buttonProps }) => {
	/* Hide price calculator unless prices are loaded */
	return loaded && <TicketPriceCalculatorButton ticketId={ticketId} {...buttonProps} />;
});
