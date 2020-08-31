import { useCallback, useMemo } from 'react';
import { anyPass, isEmpty, isNil } from 'ramda';
import { __ } from '@wordpress/i18n';

import type { ButtonProps } from '@eventespresso/adapters';

import { useDataState } from '../data';
import { TPCModalProps } from '../types';

const useSubmitButtonProps = (onSubmit: TPCModalProps['onSubmit']): ButtonProps => {
	const { prices, getData } = useDataState();

	const isDisabled = prices.length && prices.some(({ amount }) => anyPass([isNil, isEmpty])(amount));

	const onClick = useCallback(
		(e) => {
			e.preventDefault();
			onSubmit(getData());
		},
		[onSubmit, getData]
	);

	return useMemo<ButtonProps>(
		() => ({
			buttonText: __('Submit'),
			isDisabled,
			onClick,
			type: 'submit',
		}),
		[isDisabled, onClick]
	);
};

export default useSubmitButtonProps;
