import { EditorProps } from 'draft-js';

import Media from './Media';

const getBlockRenderFunc: EditorProps['blockRendererFn'] = (block) => {
	if (block.getType() === 'atomic') {
		return {
			component: Media,
			editable: false,
		};
	}
};

export default getBlockRenderFunc;
