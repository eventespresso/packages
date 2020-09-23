import React, { useCallback } from 'react';

import { Select, SelectProps } from '../Select';
import type { PerPageProps } from './types';
import './style.scss';

const calculatePageNumber = (newPerPage: number, prevPerPage: number, total: number): number => {
	const perPage = typeof newPerPage === 'undefined' ? prevPerPage : newPerPage;
	return Math.floor((total - 1) / perPage) + 1;
};

const PerPage: React.FC<PerPageProps> = ({ locale, onChangePerPage, pageNumber, perPage, perPageOptions, total }) => {
	const buildOptionText = (value: string) => `${value} ${locale?.items_per_page}`;

	const onChangeValue = useCallback<SelectProps['onChangeValue']>(
		(newPerPage) => {
			const parsedNewPerPage = parseInt(newPerPage as string, 10);
			const newPageNumber = calculatePageNumber(parsedNewPerPage as number, perPage, total);
			let pageNum = pageNumber > newPageNumber ? newPageNumber : pageNumber;
			// fix the issue:
			// Once 'total' is 0, 'pageNumber' in 'onChangePerPage' is 0, which is not correct.
			if (newPageNumber === 0) {
				pageNum = pageNumber;
			}

			if (typeof onChangePerPage === 'function') {
				onChangePerPage(pageNum, parsedNewPerPage as number);
			}
		},
		[onChangePerPage, pageNumber, perPage, total]
	);

	return (
		<Select className='ee-pagination__per-page' onChangeValue={onChangeValue} value={perPage} variant='unstyled'>
			{perPageOptions.map((opt, i) => (
				<option key={i} value={opt}>
					{buildOptionText(opt)}
				</option>
			))}
		</Select>
	);
};

export default PerPage;
