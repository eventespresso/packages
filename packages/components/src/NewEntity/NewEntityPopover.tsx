import React from 'react';

import { Modal } from '@eventespresso/adapters';
import { NewEntityPopoverProps } from './types';

import './styles.scss';

const NewEntityPopover: React.FC<NewEntityPopoverProps> = ({ children, ...rest }) => {
	return (
		<Modal bodyClassName='ee-new-entity-popover__body' className='ee-new-entity-popover' {...rest}>
			{children}
		</Modal>
	);
};

export default NewEntityPopover;
