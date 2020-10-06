import React, { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { ConfirmDelete } from '@eventespresso/components';
import { Trash } from '@eventespresso/icons';
import { useDataState } from '../data';
import type { PriceModifierProps } from '../types';

const DeletePriceModifierButton: React.FC<PriceModifierProps> = ({ price }) => {
	const { deletePrice } = useDataState();

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
