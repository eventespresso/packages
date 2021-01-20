import { ModalWithAlert } from '../';
import type { EntityEditModalProps } from './types';

import './styles.scss';

const EntityEditModal: React.FC<EntityEditModalProps> = ({
	children,
	footerContent,
	isOpen,
	onClose,
	showCancelButton = true,
	title,
	...rest
}) => {
	return (
		<ModalWithAlert
			bodyClassName='ee-entity-edit-modal__body'
			className='ee-entity-edit-modal'
			footerContent={footerContent}
			isOpen={isOpen}
			onClose={onClose}
			onCancel={showCancelButton && onClose}
			title={title}
			{...rest}
		>
			{children}
		</ModalWithAlert>
	);
};

export default EntityEditModal;
