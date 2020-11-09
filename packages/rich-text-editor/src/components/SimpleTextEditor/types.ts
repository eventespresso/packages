import { RichTextEditorProps } from '../RichTextEditor';

export interface SimpleTextEditorProps extends Omit<RichTextEditorProps, 'type'> {}
