import React from 'react';

import { Modal } from '../';
import { NewEntityPopoverProps } from './types';

import './styles.scss';

const NewEntityPopover: React.FC<NewEntityPopoverProps> = ({ children, ...rest }) => {
	return (
		<Modal bodyClassName='ee-new-entity-popover__body' className='ee-new-entity-popover' {...rest}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className={'ee-new-entity-popover__wave'}>
				<path d='M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,117.3C672,96,768,128,864,133.3C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
			</svg>
			{children}
		</Modal>
	);
};

export default NewEntityPopover;
