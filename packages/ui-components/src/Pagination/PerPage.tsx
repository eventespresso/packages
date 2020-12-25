import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Select, SelectProps } from '@eventespresso/adapters';
import { PerPageProps } from './types';

import './style.scss';

const calculatePageNumber = (newPerPage: number, prevPerPage: number, total: number): number => {
	const perPage = typeof newPerPage === 'undefined' ? prevPerPage : newPerPage;
	return Math.floor((total - 1) / perPage) + 1;
};

const selectRootProps = { className: 'ee-select-wrapper ee-pagination__per-page-select-wrapper' };

const PerPage: React.FC<PerPageProps> = ({ onChangePerPage, pageNumber, perPage, perPageOptions, total }) => {
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
		<Select
			aria-label={__('items per page')}
			className='ee-select ee-pagination__per-page'
			onChangeValue={onChangeValue}
			rootProps={selectRootProps}
			value={perPage}
			variant='unstyled'
		>
			{Object.entries(perPageOptions).map(([value, label]) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</Select>
	);
};

export default PerPage;
