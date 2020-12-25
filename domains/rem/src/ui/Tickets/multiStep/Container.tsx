import { __, sprintf } from '@eventespresso/i18n';

import { EntityEditModalContainer } from '@eventespresso/ee-components';
import Content from './Content';
import type { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = ({ entity: ticket, ...props }) => {
	const title = ticket?.dbId
		? sprintf(
				/* translators: %d ticket id */
				__('Edit ticket %d'),
				`#${ticket.dbId}`
		  )
		: __('New Ticket Details');

	return <EntityEditModalContainer component={Content} entity={ticket} title={title} {...props} />;
};

export default Container;
