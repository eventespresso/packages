import type { Story, Meta } from '@storybook/react/types-6-0';

import { noop } from '@eventespresso/utils';
import { Pagination } from './';
import { PaginationProps } from './types';

export default {
	component: Pagination,
	title: 'Components/Pagination',
} as Meta;

type PaginationStory = Story<PaginationProps>;

export const Default: PaginationStory = () => (
	<Pagination
		defaultPerPage={2}
		onChangePageNumber={noop}
		onChangePerPage={noop}
		pageNumber={1}
		perPage={2}
		total={10}
	/>
);

export const DefaultRTL: PaginationStory = () => (
	<div dir='rtl'>
		<Pagination
			defaultPerPage={2}
			onChangePageNumber={noop}
			onChangePerPage={noop}
			pageNumber={1}
			perPage={2}
			total={10}
		/>
	</div>
);
