import { useCallback } from 'react';
import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { Cell, HeaderRow } from '@eventespresso/components';
import { getCurrencySignPositionClassName } from '@eventespresso/utils';

type Props = {
	signB4: boolean;
};

type HeaderRowGenerator = (props: Props) => HeaderRow;

const useHeaderRowGenerator = (): HeaderRowGenerator => {
	return useCallback<HeaderRowGenerator>(({ signB4 }: Props) => {
		const position = getCurrencySignPositionClassName(signB4);

		const cells: Array<Cell> = [
			{
				key: 'id',
				type: 'cell',
				className: 'ee-ticket-price-calculator__price-id ee-number-column',
				value: __('ID'),
			},
			{
				key: 'type',
				type: 'cell',
				className: 'ee-ticket-price-calculator__price-type',
				value: __('Price Type'),
			},
			{
				key: 'name',
				type: 'cell',
				className: 'ee-ticket-price-calculator__price-name',
				value: __('Label'),
			},
			{
				key: 'desc',
				type: 'cell',
				className: 'ee-ticket-price-calculator__price-desc',
				value: __('Description'),
			},
			{
				key: 'amount',
				type: 'cell',
				className: classNames(position, 'ee-ticket-price-calculator__amount', 'ee-number-column'),
				value: __('Amount'),
			},
			{
				key: 'actions',
				type: 'cell',
				className: 'ee-ticket-price-calculator__actions',
				value: __('Actions'),
			},
		];

		return {
			cells,
			className: 'ee-editor-date-list-items-header-row',
			key: 'dates-list-header',
			primary: true,
			type: 'row',
		};
	}, []);
};

export default useHeaderRowGenerator;
