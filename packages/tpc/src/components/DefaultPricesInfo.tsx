import React, { useCallback } from 'react';
import { any } from 'ramda';
import { __ } from '@eventespresso/i18n';

import { isDefault } from '@eventespresso/predicates';
import { useConfig } from '@eventespresso/services';
import { useDataState } from '../data';
import { usePricesPollInterval } from '../hooks';

const DefaultPricesInfo: React.FC = () => {
	const config = useConfig();
	const adminUrl = config.siteUrl.admin;
	const href = adminUrl + '/admin.php?page=pricing';

	const [, setPricesPollInterval] = usePricesPollInterval();

	const { prices } = useDataState();
	const hasDefaultPrice = any(isDefault, prices);

	const onClickLink = useCallback(() => {
		setPricesPollInterval(4000); // 4 seconds
	}, [setPricesPollInterval]);

	return (
		hasDefaultPrice && (
			<div className='ee-tpc__default-prices-info'>
				<a href={href} target='_blank' rel='noopener noreferrer' onClick={onClickLink}>
					{__('Modify default prices.')}
				</a>
			</div>
		)
	);
};

export default DefaultPricesInfo;
