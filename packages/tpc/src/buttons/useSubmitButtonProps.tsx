import { useCallback, useMemo, useState } from 'react';
import { anyPass, isEmpty, isNil } from 'ramda';

import { __ } from '@eventespresso/i18n';
import { useTPCDataState } from '@eventespresso/edtr-services';
import { ButtonProps, ButtonType } from '@eventespresso/ui-components';
import { SaveOutlined } from '@eventespresso/icons';

import type { TPCModalProps } from '../types';

const useSubmitButtonProps = (onSubmit: TPCModalProps['onSubmit']): ButtonProps => {
	const { prices, getData } = useTPCDataState();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const isDisabled = prices.length && prices.some(({ amount }) => anyPass([isNil, isEmpty])(amount));

	const onClick = useCallback<ButtonProps['onClick']>(
		async (e) => {
			e.preventDefault();
			setIsSubmitting(true);
			await onSubmit(getData());
			setIsSubmitting(false);
		},
		[onSubmit, getData]
	);

	return useMemo<ButtonProps>(
		() => ({
			buttonText: __('Submit'),
			buttonType: ButtonType.PRIMARY,
			isDisabled,
			isLoading: isSubmitting,
			icon: SaveOutlined,
			onClick,
			type: 'submit',
		}),
		[isDisabled, isSubmitting, onClick]
	);
};

export default useSubmitButtonProps;
