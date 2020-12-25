import { useConfig, useMoneyDisplay } from '@eventespresso/services';
import { CurrencyDisplay as CurrencyDisplayUI } from '@eventespresso/ui-components';

import type { CurrencyDisplayProps } from './types';

export const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({ value, ...props }) => {
	const { formatAmount } = useMoneyDisplay();
	const { currency } = useConfig();

	return <CurrencyDisplayUI {...props} value={formatAmount(value)} sign={currency?.sign} signB4={currency?.signB4} />;
};
