import React from 'react';
import { __ } from '@wordpress/i18n';

import { EntityEditModal } from '@eventespresso/components';
import useBulkEditFormConfig from './useBulkEditFormConfig';
import { EspressoForm } from '@eventespresso/form';
import Warning from './Warning';
import FormWrapper from './FormWrapper';
import useSubmitForm from './useSubmitForm';

import './styles.scss';

type EditDetailsProps = {
	onClose: VoidFunction;
};

const EditDetails: React.FC<EditDetailsProps> = ({ onClose }) => {
	const onSubmit = useSubmitForm(onClose);
	const formConfig = useBulkEditFormConfig({ onSubmit });

	return (
		<EntityEditModal
			isOpen={true}
			onClose={onClose}
			closeOnOverlayClick={true}
			title={__('Bulk edit date details')}
		>
			<Warning />
			<EspressoForm {...formConfig} formWrapper={FormWrapper} />
		</EntityEditModal>
	);
};

export default EditDetails;
