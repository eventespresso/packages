import { __ } from '@eventespresso/i18n';
import { IconButton, IconButtonProps } from '@eventespresso/ui-components';
import { Edit as EditIcon } from '@eventespresso/icons';

import './style.scss';

const Edit: React.FC<IconButtonProps> = ({ onClick, ...props }) => {
	return (
		<IconButton
			{...props}
			borderless
			className='ee-ticket-sidebar__edit-ticket'
			icon={EditIcon}
			onClick={onClick}
			tooltip={__('edit ticket')}
		/>
	);
};

export default Edit;
