//import { withTPCContext } from '@eventespresso/edtr-services';

import Modal from './Modal';
import type { ContentWrapperProps } from './types';

const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
	// const { values } = props.form.getState();

	// const Component = withTPCContext(Modal, {
	// 	ticketId: values.id,
	// });

	// return <Component {...props} />;

	return <Modal {...props} />;
};

export default ContentWrapper;
