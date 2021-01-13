import { ContentBlock, ContentState } from 'draft-js';

export interface BlockComponentProps {
	block: ContentBlock;
	contentState: ContentState;
}
