import { __ } from '@eventespresso/i18n';

import { Heading } from '../Heading';

export const FormBuilderSidebar = () => {
	return (
		<>
			<Heading as='h5'>{__('Form Elements')}</Heading>
			<div className='sidebar-items'>
				<div className='sidebar-item'>Form Section</div>
				<div className='sidebar-item'>Heading</div>
				<div className='sidebar-item'>Text Block</div>
				<div className='sidebar-item'>Text Input</div>
			</div>
		</>
	);
};
