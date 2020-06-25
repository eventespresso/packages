import React from 'react';
import { __ } from '@wordpress/i18n';

import { Calculator } from '@eventespresso/icons';
import { IconButton, IconButtonProps } from '@eventespresso/components';
import { TypeName } from '@eventespresso/services';
import { withIsLoaded } from '@eventespresso/services';

import type { BaseProps } from '../types';
import { useTicketPriceCalculator } from '../hooks';
import type { TooltipProps } from '@eventespresso/adapters';
import { useMemoStringify } from '@eventespresso/services';

interface TPCButtonProps extends BaseProps, IconButtonProps { }

const TicketPriceCalculatorButton: React.FC<TPCButtonProps> = ({ ticketId, ...buttonProps }) => {
	const { ModalContainer, onOpen, ...disclosure } = useTicketPriceCalculator();

	const tooltipProps = useMemoStringify<TooltipProps>({ placement: 'left' });

	return (
		<>
			<IconButton
				borderless
				icon={Calculator}
				onClick={onOpen}
				tooltip={__('ticket price calculator')}
				tooltipProps={tooltipProps}
				{...buttonProps}
			/>
			<ModalContainer ticketId={ticketId} {...disclosure} />
		</>
	);
};

export default withIsLoaded<TPCButtonProps>(TypeName.prices, ({ loaded, ticketId, ...buttonProps }) => {
	/* Hide price calculator unless prices are loaded */
	return loaded && <TicketPriceCalculatorButton ticketId={ticketId} {...buttonProps} />;
});
