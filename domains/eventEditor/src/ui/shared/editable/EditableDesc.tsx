import React, { useCallback, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { TabbableText, ModalWithAlert } from '@eventespresso/components';
import { RichTextEditor } from '@eventespresso/rich-text-editor';

import './style.scss';

interface EditableDescProps {
	className?: string;
	description: string;
	updateEntity: ({ description }: { description: string }) => void;
}

const EditableDesc: React.FC<EditableDescProps> = ({ updateEntity, ...props }) => {
	const [description, setDescription] = useState(props.description);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const className = 'entity-card-details__description';

	const onCancel = useCallback((): void => {
		setDescription(props.description);
		onClose();
	}, [onClose, props.description]);

	const onChange = useCallback((desc: string): void => {
		setDescription(desc);
	}, []);

	const onSubmit = useCallback((): void => {
		if (description !== props.description) {
			updateEntity({ description });
		}
	}, [description, props.description, updateEntity]);

	const tooltip = __('edit description...');

	return (
		<>
			<ModalWithAlert
				className='ee-rich-content-description-modal'
				isOpen={isOpen}
				onCancel={onCancel}
				onClose={onCancel}
				onSubmit={onSubmit}
				showAlertOnEscape={description !== props.description}
				title={__('Edit description')}
			>
				<RichTextEditor onChange={onChange} value={props.description} />
			</ModalWithAlert>
			<TabbableText
				richTextContent
				className={className}
				onClick={onOpen}
				tooltip={tooltip}
				text={props.description}
			/>
		</>
	);
};

export default EditableDesc;
