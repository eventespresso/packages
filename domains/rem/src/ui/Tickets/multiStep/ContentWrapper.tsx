import { withTPCContext } from '@eventespresso/edtr-services';

import type { ContentWrapperProps } from './types';
import Modal from './Modal';

const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
	const { values } = props.form.getState();

	const Component = withTPCContext(Modal, {
		ticketId: values.id,
	});
	return <Component {...props} />;
};

export default ContentWrapper;
