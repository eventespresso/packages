import { TOptions } from 'use-fit-text';

export interface TextFitProps extends Pick<TOptions, 'maxFontSize' | 'minFontSize'> {
	text: string;
}
