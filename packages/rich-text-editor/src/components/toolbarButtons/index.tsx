import { EditorProps } from 'react-draft-wysiwyg';

import WPMedia from './WPMedia';

const toolbarButtons: EditorProps['toolbarCustomButtons'] = [<WPMedia key='wpmedia' />];

export default toolbarButtons;
