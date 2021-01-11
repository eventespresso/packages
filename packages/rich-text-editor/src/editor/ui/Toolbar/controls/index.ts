import { ToolbarOption, ToolbarControlProps } from '../../types';

import inline from './inline';
import blockType from './blockType';
import fontFamily from './fontFamily';
import fontSize from './fontSize';
import list from './list';
import link from './link';
import textAlign from './textAlign';

const controls: {
	[K in ToolbarOption]?: React.ComponentType<ToolbarControlProps<K>>;
} = { inline, blockType, fontFamily, fontSize, list, link, textAlign };

export default controls;
