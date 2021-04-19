import { useCallback } from 'react';

import { AttendeesEditProps } from '../types';
import SortOrderControl from '@blocksComponents/SortOrderControl';

const SelectOrder: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { order } = attributes;

	const setOrder = useCallback((order): void => setAttributes({ order }), [setAttributes]);

	return <SortOrderControl order={order} setOrder={setOrder} />;
};

export default SelectOrder;
