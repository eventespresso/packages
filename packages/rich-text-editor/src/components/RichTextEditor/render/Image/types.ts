import { ImgHTMLAttributes } from 'react';
import type { ToolbarStateReturn } from 'reakit/Toolbar';

import { BlockComponentProps } from '../types';

export type Alignment = 'center' | 'left' | 'right';

export interface BaseProps {
	align?: Alignment;
}

export interface ImageProps extends BlockComponentProps, ImgHTMLAttributes<HTMLImageElement>, BaseProps {}

export interface ToolbarProps extends BaseProps {
	setAlignment: (alignment: Alignment) => void;
	toolbar: ToolbarStateReturn;
}
