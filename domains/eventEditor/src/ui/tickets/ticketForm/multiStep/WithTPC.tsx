import { withContext as withTPCContext } from '@eventespresso/tpc';

import type { ContentWrapperProps } from './types';
import Modal from './Modal';

const WithTPC: React.FC<ContentWrapperProps> = (props) => {
	const { values } = props.form.getState();

	const Component = withTPCContext(Modal, {
		ticketId: values.id,
	});
	return <Component {...props} />;
};

export default WithTPC;
