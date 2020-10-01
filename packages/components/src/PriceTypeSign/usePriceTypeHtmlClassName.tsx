import { getCurrencySignCharacterCountClassName, getCurrencySignPositionClassName } from '@eventespresso/utils';
import { useConfig } from '@eventespresso/services';

const usePriceTypeClassName = (isPercent: boolean): string => {
	const config = useConfig();
	const sign = config?.currency?.sign;
	const signB4 = config?.currency?.signB4;
	const characters = getCurrencySignCharacterCountClassName(sign);
	const position = getCurrencySignPositionClassName(signB4);

	return isPercent ? `ee-percent-field${position}${characters}` : `ee-money-field${position}${characters}`;
};

export default usePriceTypeClassName;
