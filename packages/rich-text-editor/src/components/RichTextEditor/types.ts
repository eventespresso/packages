import { Editor } from 'draft-js';
import { StateProviderProps } from '../../context';
import { ToolbarProps } from './Toolbar';

export interface RichTextEditorProps extends ToolbarProps, StateProviderProps {
	'aria-label'?: string;
	className?: string;
}

export type DraftEditorProps = React.ComponentProps<typeof Editor>;
