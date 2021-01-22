import { useEffect, useState } from 'react';

import { EntityEditModal } from '@eventespresso/ui-components';
import { __, sprintf } from '@eventespresso/i18n';
import { usePrevNext } from '@eventespresso/hooks';

import ContentBody from './ContentBody';

import FooterButtons from './FooterButtons';
import type { ContentWrapperProps } from './types';

const Modal: React.FC<ContentWrapperProps> = ({ onClose, ...props }) => {
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
			<ContentBody {...props} steps={steps} />
		</EntityEditModal>
	);
};

export default Modal;
