import { withContext as withTPCContext } from '@eventespresso/tpc';

import type { ContextProviderProps } from './types';
import Modal from './Modal';

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
	const { values } = props.form.getState();

	const Component = withTPCContext(Modal, {
		ticketId: values.id,
	});
	return <Component {...props} />;
};

export default ContextProvider;
