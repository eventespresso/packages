import type { AnyObject } from '@eventespresso/utils';

/**
 * Changes the style keys
 *
 * 'BOLD' => 'bold'
 * 'ITALIC', => 'italic'
 * 'CODE', => 'monospace'
 */
export const changeStyleKeys = (style: AnyObject) => {
	const newStyleObj = {};
	if (style) {
		for (const key in style) {
			const value = style[key];
			newStyleObj[key === 'CODE' ? 'monospace' : key.toLowerCase()] = value;
		}
		return newStyleObj;
	}
	return newStyleObj;
};
