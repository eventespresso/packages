import React from 'react';
import { __ } from '@wordpress/i18n';

import { Button, ButtonSize, NewEntityOption } from '@eventespresso/components';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';
import { CalendarAlt } from '@eventespresso/icons';

import { EntityEditModalData } from '@edtrUI/types';

type AddSingleDateProps = {
	isOnlyButton?: boolean;
};

const AddSingleDate: React.FC<AddSingleDateProps> = ({ isOnlyButton }) => {
	const { open } = useGlobalModal<EntityEditModalData>(EdtrGlobalModals.EDIT_DATE);

	const output = (
		<Button
			buttonText={isOnlyButton ? __('Add New Date') : __('Add Single Date')}
			onClick={open}
			buttonSize={isOnlyButton ? ButtonSize.BIG : null}
			buttonType='primary'
			icon={isOnlyButton && CalendarAlt}
		/>
	);

	if (isOnlyButton) {
		return output;
	}

	return (
		<NewEntityOption
			className={'ee-new-entity-option__single-datetime'}
			description={__('Add a single date\nthat only occurs once')}
			icon={CalendarAlt}
			title={__('Single Date')}
		>
			{output}
		</NewEntityOption>
	);
};

export default AddSingleDate;
