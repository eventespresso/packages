import React from 'react';
import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { parsedAmount } from '@eventespresso/utils';

import { BaseNumberInputField, MoneyField, usePriceAmount } from '../fields';
import { useDataState } from '../data';
import type { PriceModifierProps } from '../types';

import './styles.scss';

const PriceAmountInput: React.FC<PriceModifierProps> = ({ price }) => {
	const { reverseCalculate } = useDataState();
	const { getValue, setValue } = usePriceAmount({ field: 'amount', price });

	const hasError = Number(price?.amount ?? 0) === 0;
	const className = classNames('ee-input ee-input__price-field', {
		'ee-input__price-field--has-error': hasError,
	});

	const disabled = (reverseCalculate && price.isBasePrice) || price.isDefault;

	const formatParse = (defaultValue = null) => (amount: any) => {
		const parsedValue = parsedAmount(amount);
		return isNaN(parsedValue) ? defaultValue : parsedValue;
	};

	const moneyFieldClassName = disabled && 'ee-input--disabled';

	return (
		<MoneyField className={moneyFieldClassName} isPercent={price.isPercent}>
			<BaseNumberInputField
				aria-label={__('amount')}
				className={className}
				component='input'
				// because it can affect other tickets that have this price
				// default price amount should not be changeable
				disabled={disabled}
				format={formatParse('')}
				formatOnBlur
				getValue={getValue}
				name='amount'
				parse={formatParse()}
				placeholder={__('amount…')}
				setValue={setValue}
				type='number'
			/>
		</MoneyField>
	);
};

export default PriceAmountInput;
