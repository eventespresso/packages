import classNames from 'classnames';

import type { Cell } from './types';

/**
 * adds 'ee-zebra-stripe-on-mobile' css class to every other table cell
 * except those whose table row cell "key" is in the exclude array
 */
export const addZebraStripesOnMobile = (exclude: Array<string>) => (cells: Array<Cell>): Array<Cell> => {
	let x = 0;

	return cells.map((cell) => {
		if (!cell.key || exclude.indexOf(cell.key) > -1) {
			return cell;
		}

		x++;

		if (x % 2 === 0) {
			return {
				...cell,
				className: classNames(cell.className, 'ee-zebra-stripe-on-mobile'),
			};
		}

		return cell;
	});
};
