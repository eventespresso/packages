import { useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { ResponsiveTable } from '@eventespresso/ui-components';
import { useConfig } from '@eventespresso/services';
import { useMemoStringify } from '@eventespresso/hooks';
import { Prices, useTPCDataState } from '@eventespresso/edtr-services';

import useBodyRowGenerator from './useBodyRowGenerator';
import useFooterRowGenerator from './useFooterRowGenerator';
import useHeaderRowGenerator from './useHeaderRowGenerator';

import './styles.scss';

interface TableProps extends Prices {}

const Table: React.FC<TableProps> = ({ prices }) => {
	const config = useConfig();
	const { reverseCalculate, toggleCalcDir } = useTPCDataState();
	const signB4 = config?.currency?.signB4;

	const bodyRowGenerator = useBodyRowGenerator();
	const footerRowGenerator = useFooterRowGenerator();
	const headerRowGenerator = useHeaderRowGenerator();

	const bodyRows = useMemo(() => prices.map((price, index) => bodyRowGenerator({ index, price })), [
		bodyRowGenerator,
		prices,
	]);

	const footerRows = useMemo(() => {
		const footerRow = footerRowGenerator({ reverseCalculate, toggleCalcDir });
		return [footerRow];
	}, [footerRowGenerator, reverseCalculate, toggleCalcDir]);

	const headerRows = useMemo(() => {
		const headerRow = headerRowGenerator({ signB4 });
		return [headerRow];
	}, [headerRowGenerator, signB4]);

	const className = useMemoStringify({ tableClassName: 'ee-ticket-price-calculator' });
	const metaData = useMemoStringify({
		tableId: 'ticket-price-calculator-table',
		tableCaption: __('Ticket Price Calculator'),
	});

	return (
		<ResponsiveTable
			bodyRows={bodyRows}
			className={className}
			footerRows={footerRows}
			headerRows={headerRows}
			metaData={metaData}
		/>
	);
};

export default Table;
