import React from 'react';

import { ButtonRow, DebugInfo } from '@eventespresso/components';

import DefaultPricesInfo from './DefaultPricesInfo';
import DefaultTaxesInfo from './DefaultTaxesInfo';

import DeleteAllPricesButton from '../buttons/DeleteAllPricesButton';
import NoPricesBanner from './NoPricesBanner';
import Table from './table/Table';
import TaxesButtons from '../buttons/taxes/TaxesButtons';
import { useDataState } from '../data';
import { useInitStateListeners } from '../stateListeners';
import { usePricesPolling } from '../hooks';

import './styles.scss';

export interface TicketPriceCalculatorProps {
	context?: 'standalone' | 'editTicketForm';
}

const TicketPriceCalculator: React.FC<TicketPriceCalculatorProps> = ({ context }) => {
	// initialize state listeners
	useInitStateListeners();

	usePricesPolling();

	const dataState = useDataState();

	if (!dataState.prices?.length) {
		return (
			<>
				<NoPricesBanner context={context} />
				<DebugInfo data={dataState} />
			</>
		);
	}

	return (
		<>
			<Table prices={dataState.prices} />
			<DefaultTaxesInfo />

			<ButtonRow>
				<DebugInfo data={dataState} />
				<DefaultPricesInfo />
				<TaxesButtons />
				<DeleteAllPricesButton />
			</ButtonRow>
		</>
	);
};

export default TicketPriceCalculator;
