import { useCallback } from 'react';
import { AtomicBlockUtils } from 'draft-js';

import { ToolbarControlProps } from '../../types';
import { useEditorState } from '../../../../../hooks';
import defaultComponent from './Component';

type ImageData = { src: string; height?: number; width?: number; alt?: string };

const Image: React.FC<ToolbarControlProps<'image'>> = (props) => {
	const [editorState, setEditorState] = useEditorState();

	const addImage = useCallback(
		({ src, height, width, alt }: ImageData) => {
			const entityData = { src, height, width, alt };

			const entityKey = editorState
				.getCurrentContent()
				.createEntity('IMAGE', 'MUTABLE', entityData)
				.getLastCreatedEntityKey();
			const newEditorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
			setEditorState(newEditorState);
		},
		[editorState, setEditorState]
	);

	const onChange = useCallback(
		(_: any, data: ImageData) => {
			addImage(data);
		},
		[addImage]
	);

	const Component = props.config.component || defaultComponent;
	return <Component {...props} onChange={onChange} />;
};

export default Image;
