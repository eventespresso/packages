import { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { ConfirmDelete } from '@eventespresso/ui-components';
import { Trash } from '@eventespresso/icons';
import { useTPCDataState } from '@eventespresso/edtr-services';
import type { PriceModifierProps } from '../types';

const DeletePriceModifierButton: React.FC<PriceModifierProps> = ({ price }) => {
	const { deletePrice } = useTPCDataState();

	const buttonProps = useMemo(() => ({ icon: () => <Trash noMargin />, tooltip: __('delete price modifier') }), []);
	// new or default prices should not be deleted server-side
	const isNewOrDefault = price.isNew || price.isDefault;
	const onConfirm = useCallback(() => {
		// delete the price from TPC state
		deletePrice(price.id, isNewOrDefault);
	}, [deletePrice, price, isNewOrDefault]);

	return <ConfirmDelete buttonProps={buttonProps} onConfirm={onConfirm} />;
};

export default DeletePriceModifierButton;
