import { usePrices, useTPCDataState } from '@eventespresso/edtr-services';
import { getDefaultTaxes } from '@eventespresso/predicates';

import AddDefaultTaxesButton from './AddDefaultTaxesButton';
import RemoveTaxesButton from './RemoveTaxesButton';

const TaxesButtons: React.FC = () => {
	const allPrices = usePrices();
	const defaultTaxPrices = getDefaultTaxes(allPrices);

	const { prices } = useTPCDataState();
	const tpcDefaultTaxPrices = getDefaultTaxes(prices);

	// since we load all the default prices in EDTR
	// so if the the number of TPC taxes is equal to number of all default taxes
	// It means that TPC has all the possible tax prices
	if (tpcDefaultTaxPrices.length && defaultTaxPrices.length === tpcDefaultTaxPrices.length) {
		return <RemoveTaxesButton />;
	}

	// if we have default taxes in cache
	if (defaultTaxPrices.length) {
		return <AddDefaultTaxesButton />;
	}

	return null;
};

export default TaxesButtons;
