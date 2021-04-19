import { __ } from '@eventespresso/i18n';

import { BulkEditDetails } from '@eventespresso/ee-components';
import useBulkEditFormConfig from './useBulkEditFormConfig';
import useSubmitForm from './useSubmitForm';

type EditDetailsProps = {
	isOpen: boolean;
	onClose: VoidFunction;
};

const EditDetails: React.FC<EditDetailsProps> = ({ onClose, isOpen }) => {
	const onSubmit = useSubmitForm(onClose);
	const formConfig = useBulkEditFormConfig({ onSubmit });

	return (
		<BulkEditDetails
			formConfig={formConfig}
			isOpen={isOpen}
			onClose={onClose}
			title={__('Bulk edit date details')}
			warning={__('any changes will be applied to ALL of the selected dates.')}
		/>
	);
};

export default EditDetails;
