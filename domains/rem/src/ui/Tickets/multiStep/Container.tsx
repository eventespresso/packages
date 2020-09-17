import React from 'react';
import { __, sprintf } from '@eventespresso/i18n';

import type { ContainerProps } from './types';
import { Container as EditModalContainer } from '@eventespresso/components';
import Content from './Content';

const Container: React.FC<ContainerProps> = ({ entity: ticket, ...props }) => {
	const title = ticket?.dbId ? sprintf(__('Edit ticket %s'), `#${ticket.dbId}`) : __('New Ticket Details');

	return <EditModalContainer component={Content} entity={ticket} title={title} {...props} />;
};

export default Container;
