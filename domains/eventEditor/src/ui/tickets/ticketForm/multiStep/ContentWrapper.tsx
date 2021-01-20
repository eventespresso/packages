import { useEffect, useState } from 'react';

import { withContext as withTPCContext } from '@eventespresso/tpc';
import { EntityEditModal } from '@eventespresso/ui-components';
import { EdtrGlobalModals, useEvent } from '@eventespresso/edtr-services';
import { useGlobalModal } from '@eventespresso/registry';
import { __, sprintf } from '@eventespresso/i18n';
import { usePrevNext, useMemoStringify } from '@eventespresso/hooks';
import type { AnyObject } from '@eventespresso/utils';

import { withContext as withTAMContext } from '@edtrUI/ticketAssignmentsManager/context';
import ContentBody from './ContentBody';

import type { ContentWrapperProps } from './types';
import type { EntityEditModalData } from '@edtrUI/types';
import FooterButtons from './FooterButtons';

/**
 * This component is inside RFF context, so we can use all of RFF features.
 */
const ContentWrapper: React.FC<ContentWrapperProps> = (props) => {
	const { isOpen, close: closeModal } = useGlobalModal<EntityEditModalData>(EdtrGlobalModals.EDIT_TICKET);
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
				/* translators: %s ticket id */
				__('Edit ticket %s'),
				`#${values.dbId}`
		  )
		: __('New Ticket Details');

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

const WithTPC: React.FC<ContentWrapperProps> = (props) => {
	const { values } = props.form.getState();

	const Component = withTPCContext(ContentWrapper, {
		ticketId: values.id,
	});
	return <Component {...props} />;
};

const WithTAM: React.FC<ContentWrapperProps> = (props) => {
	const { values } = props.form.getState();

	// provide entity details to TAM from edit form
	const Component = withTAMContext<AnyObject>(
		WithTPC,
		useMemoStringify({
			assignmentType: 'forTicket',
			entity: { id: 'NEW_TICKET', ...values } as any,
		})
	);

	return <Component {...props} />;
};

export default WithTAM;
