import { useEffect, useState } from 'react';

import { EntityEditModal } from '@eventespresso/ui-components';
import { __, sprintf } from '@eventespresso/i18n';
import { usePrevNext } from '@eventespresso/hooks';

import ModalBody from './ModalBody';

import type { ContextProviderProps } from './types';
import FooterButtons from './FooterButtons';

const Modal: React.FC<ContextProviderProps> = ({ onClose, ...props }) => {
	const steps = usePrevNext();
	const [isPristine, setIsPristine] = useState(true);

	const { values } = props.form.getState();

	useEffect(() => {
		return props.form.subscribe(({ pristine }) => setIsPristine(pristine), { pristine: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const title = values?.dbId
		? sprintf(
				/* translators: %d ticket id */
				__('Edit ticket %d'),
				`#${values.dbId}`
		  )
		: __('New Ticket Details');

	const footerButtons = <FooterButtons steps={steps} />;

	return (
		<EntityEditModal
			isOpen={true}
			footerContent={footerButtons}
			onClose={onClose}
			showAlertOnClose={!isPristine}
			title={title}
		>
			<ModalBody {...props} steps={steps} />
		</EntityEditModal>
	);
};

export default Modal;
