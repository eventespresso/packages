import { Editor } from 'draft-js';
import { StateProviderProps } from '../../context';
import { ToolbarProps } from '../types';

export interface RichTextEditorProps extends ToolbarProps, StateProviderProps {
	'aria-label'?: string;
	className?: string;
	type?: 'simple' | 'advanced';
}

export type DraftEditorProps = React.ComponentProps<typeof Editor>;
