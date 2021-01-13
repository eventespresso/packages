import { useCallback, useMemo } from 'react';
import { anyPass, isEmpty, isNil } from 'ramda';
import { __ } from '@eventespresso/i18n';

import { useTPCDataState } from '@eventespresso/edtr-services';
import type { ButtonProps } from '@eventespresso/ui-components';

import { TPCModalProps } from '../types';

const useSubmitButtonProps = (onSubmit: TPCModalProps['onSubmit']): ButtonProps => {
	const { prices, getData } = useTPCDataState();

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
