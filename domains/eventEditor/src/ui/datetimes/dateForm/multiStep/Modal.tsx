import { useEffect, useState } from 'react';

import { EntityEditModal } from '@eventespresso/ui-components';
import { EdtrGlobalModals, useEvent } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';
import { __, sprintf } from '@eventespresso/i18n';
import { usePrevNext } from '@eventespresso/hooks';

import ContentBody from './ContentBody';

import type { ContentWrapperProps } from './types';
import type { EntityEditModalData } from '@edtrUI/types';
import FooterButtons from './FooterButtons';

const Modal: React.FC<ContentWrapperProps> = (props) => {
	const { isOpen, close: closeModal } = useGlobalModal<EntityEditModalData>(EdtrGlobalModals.EDIT_DATE);
	const event = useEvent();
	const steps = usePrevNext();
	const [isPristine, setIsPristine] = useState(true);

	const { values } = props.form.getState();

	useEffect(() => {
		return props.form.subscribe(({ pristine }) => setIsPristine(pristine), { pristine: true });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let title = values?.dbId
		? sprintf(
				/* translators: %s datetime id */
				__('Edit datetime %s'),
				`#${values.dbId}`
		  )
		: __('New Datetime');

	// add event name to the title
	title = event?.name ? `${event.name}: ${title}` : title;

	const footerButtons = <FooterButtons steps={steps} />;

	return (
		<EntityEditModal
			isOpen={isOpen}
			footerContent={footerButtons}
			onClose={closeModal}
			showAlertOnClose={!isPristine}
			title={title}
		>
			<ContentBody {...props} steps={steps} />
		</EntityEditModal>
	);
};

export default Modal;
