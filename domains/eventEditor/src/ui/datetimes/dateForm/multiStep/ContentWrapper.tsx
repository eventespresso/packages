import { useMemoStringify } from '@eventespresso/hooks';
import type { AnyObject } from '@eventespresso/utils';

import { withContext as withTAMContext } from '@edtrUI/ticketAssignmentsManager/context';

import type { ContentWrapperProps } from './types';
import Modal from './Modal';

const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
	const { values } = props.form.getState();

	// provide entity details to TAM from edit form
	const Component = withTAMContext<AnyObject>(
		Modal,
		useMemoStringify({
			assignmentType: 'forDate',
			entity: { id: 'NEW_DATE', dbId: 0, ...values } as any,
		})
	);

	return <Component {...props} />;
};

export default ContentWrapper;
