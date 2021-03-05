import {
	EntityEditModal as EntityEditModalUI,
	EntityEditModalProps as EntityEditModalUIProps,
} from '@eventespresso/ui-components';
import { Slot } from '@eventespresso/slot-fill';

export interface EntityEditModalProps extends EntityEditModalUIProps {
	entityType?: 'date' | 'ticket';
}

export const EntityEditModal: React.FC<EntityEditModalProps> = ({ entityType, footerContent, ...rest }) => {
	const footer = (
		<>
			{footerContent}
			<div>
				<Slot name={`edit-${entityType}-modal-footer`} />
			</div>
		</>
	);
	return <EntityEditModalUI footerContent={footer} {...rest} />;
};
