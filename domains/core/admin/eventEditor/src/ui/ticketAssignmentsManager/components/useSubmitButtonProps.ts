import { useCallback, useMemo, useState } from 'react';

import { __ } from '@eventespresso/i18n';
import { ButtonType } from '@eventespresso/ui-components';
import type { ButtonProps } from '@eventespresso/ui-components';
import { SaveOutlined } from '@eventespresso/icons';

import { useDataState } from '../data';
import { TAMModalProps } from '../context';

const useSubmitButtonProps = (onSubmitData: TAMModalProps['onSubmit']): ButtonProps => {
	const { hasOrphanEntities, getData } = useDataState();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const hasErrors = hasOrphanEntities();

	const onSubmit = useCallback<ButtonProps['onClick']>(
		async (e) => {
			e.preventDefault();
			setIsSubmitting(true);
			await onSubmitData(getData());
			setIsSubmitting(false);
		},
		[getData, onSubmitData]
	);

	return useMemo<ButtonProps>(
		() => ({
			buttonText: __('Submit'),
			buttonType: ButtonType.PRIMARY,
			icon: SaveOutlined,
			isDisabled: hasErrors,
			isLoading: isSubmitting,
			onClick: onSubmit,
			type: 'submit',
		}),
		[hasErrors, isSubmitting, onSubmit]
	);
};

export default useSubmitButtonProps;
