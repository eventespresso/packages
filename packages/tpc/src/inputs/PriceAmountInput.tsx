import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { parsedAmount } from '@eventespresso/utils';
import { BaseNumberInputField, MoneyInputWithConfig, usePriceAmount } from '../fields';
import { useDataState } from '../data';
import type { PriceModifierProps } from '../types';

import './styles.scss';

const PriceAmountInput: React.FC<PriceModifierProps> = ({ price }) => {
	const { reverseCalculate, isDisabled } = useDataState();
	const { getValue, setValue } = usePriceAmount({ field: 'amount', price });

	const hasError = Number(price?.amount ?? 0) === 0;
	const className = classNames('ee-input__price-field', {
		'ee-input__price-field--has-error': hasError,
	});

	const disabled = isDisabled || (reverseCalculate && price.isBasePrice) || price.isDefault;

	const formatParse = (defaultValue = null) => (amount: any) => {
		const parsedValue = parsedAmount(amount);
		return isNaN(parsedValue) ? defaultValue : parsedValue;
	};

	return (
		<MoneyInputWithConfig disabled={disabled} isPercent={price.isPercent}>
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
				min={0}
				name='amount'
				parse={formatParse()}
				placeholder={__('amount…')}
				setValue={setValue}
				type='number'
			/>
		</MoneyInputWithConfig>
	);
};

export default PriceAmountInput;
