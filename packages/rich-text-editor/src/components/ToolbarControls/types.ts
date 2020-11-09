import type { Editor } from 'draft-js';
import { UrlInputState } from '../../hooks';
import { RichTextEditorProps } from '../RichTextEditor';

export interface ToolbarControlsProps extends BaseControlProps {
	type?: RichTextEditorProps['type'];
}

export interface BaseControlProps {
	editorRef: React.MutableRefObject<Editor>;
}

export interface UrlInputProps extends BaseControlProps, Omit<UrlInputState, 'isVisible'> {}

export interface LinkControlProps extends Pick<UrlInputState, 'inputRef' | 'setUrlValue' | 'setIsVisible'> {}
