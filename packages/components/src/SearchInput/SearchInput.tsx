import React from 'react';
import classNames from 'classnames';

import { TextInput, TextInputProps } from '@eventespresso/adapters';
import { withLabel, withLabelProps } from '../withLabel';
import type { withTooltipProps } from '../withTooltip';

interface SearchInputProps extends TextInputProps, Partial<withLabelProps>, Partial<withTooltipProps> {
	searchText: string;
	setSearchText: (text?: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ id, searchText, setSearchText, ...props }) => {
	const className = classNames('ee-input-base ee-input ee-search-input', props.className);

	return typeof setSearchText === 'function' ? (
		<TextInput {...props} id={id} className={className} value={searchText} onChangeValue={setSearchText} />
	) : null;
};

export default withLabel(SearchInput);
