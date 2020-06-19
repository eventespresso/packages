import { useCallback, useMemo } from 'react';
import { __ } from '@wordpress/i18n';

import { ButtonProps, ButtonType } from '@eventespresso/components';
import { SaveOutlined } from '@eventespresso/icons';
import { useOnSubmitAssignments } from '../../../data';
import { useDataState } from '../../../data';

const useSubmitButtonProps = (onCloseModal: VoidFunction): ButtonProps => {
	const submitAssignments = useOnSubmitAssignments();

	const { hasOrphanEntities, getData } = useDataState();

	const hasErrors = hasOrphanEntities();
	const data = getData();

	const onSubmit: ButtonProps['onClick'] = useCallback(
		(e) => {
			e.preventDefault();
			submitAssignments(data);
			onCloseModal();
		},
		[data, onCloseModal, submitAssignments]
	);

	return useMemo<ButtonProps>(
		() => ({
			buttonText: __('Submit'),
			buttonType: ButtonType.PRIMARY,
			icon: SaveOutlined,
			isDisabled: hasErrors,
			onClick: onSubmit,
			type: 'submit',
		}),
		[hasErrors, onSubmit]
	);
};

export default useSubmitButtonProps;
