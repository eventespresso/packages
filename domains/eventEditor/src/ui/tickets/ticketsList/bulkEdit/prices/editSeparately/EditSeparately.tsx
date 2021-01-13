import { useBulkEdit } from '@eventespresso/services';
import { withTPCContext } from '@eventespresso/edtr-services';

import { EditPricesBaseProps } from '../types';
import { TPCInstance } from './TPCInstance';
import { FooterButtons } from '../buttons';
import { useManageTPCStates } from './useManageTPCStates';
import useOnSubmit from './useOnSubmit';

const EditSeparately: React.FC<EditPricesBaseProps> = ({ onClose }) => {
	const { getSelected } = useBulkEdit();

	const { getDataStates, setTPCState } = useManageTPCStates();

	const onSubmit = useOnSubmit(onClose, getDataStates);

	const ticketIds = getSelected();

	return (
		<>
			{ticketIds.map<React.ReactNode>((ticketId) => {
				const Instance = withTPCContext(TPCInstance, { ticketId });
				return <Instance key={ticketId} setTPCState={setTPCState} />;
			})}
			<FooterButtons onSubmit={onSubmit} onCancel={onClose} />
		</>
	);
};

export default EditSeparately;
