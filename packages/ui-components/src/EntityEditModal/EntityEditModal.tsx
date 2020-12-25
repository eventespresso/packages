import { Modal } from '../';
import type { EntityEditModalProps } from './types';

import './styles.scss';

const EntityEditModal: React.FC<EntityEditModalProps> = ({ isOpen, onClose, title, children, ...rest }) => {
	return (
		<Modal
			bodyClassName='ee-entity-edit-modal__body'
			className='ee-entity-edit-modal'
			closeOnOverlayClick={false}
			isOpen={isOpen}
			onClose={onClose}
			title={title}
			{...rest}
		>
			{children}
		</Modal>
	);
};

export default EntityEditModal;
