import { Editor } from 'draft-js';
import { StateProviderProps } from '../../context';

export interface RichTextEditorProps extends StateProviderProps {
	'aria-label'?: string;
	className?: string;
	type?: 'simple' | 'advanced';
}

export type DraftEditorProps = React.ComponentProps<typeof Editor>;
