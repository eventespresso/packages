import { useCallback, useMemo } from 'react';
import { __ } from '@eventespresso/i18n';

import { ButtonType } from '@eventespresso/ui-components';
import type { ButtonProps } from '@eventespresso/ui-components';
import { SaveOutlined } from '@eventespresso/icons';
import { useDataState } from '../../../data';
import { TAMModalProps } from '../../../context';

const useSubmitButtonProps = (onSubmitData: TAMModalProps['onSubmit']): ButtonProps => {
	const { hasOrphanEntities, getData } = useDataState();

	const hasErrors = hasOrphanEntities();

	const onSubmit: ButtonProps['onClick'] = useCallback(
		(e) => {
			e.preventDefault();
			onSubmitData(getData());
		},
		[getData, onSubmitData]
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
