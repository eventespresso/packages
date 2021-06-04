import classNames from 'classnames';

import { TextInput, TextInputProps } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';

import './style.scss';

interface SearchInputProps extends TextInputProps {
	searchText: string;
	setSearchText: (text?: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ id, searchText, setSearchText, ...props }) => {
	const className = classNames('ee-search-input', props.className);

	return typeof setSearchText === 'function' ? (
		<TextInput {...props} id={id} className={className} value={searchText} onChangeValue={setSearchText} />
	) : null;
};

export const SearchInputWithLabel = withLabel(SearchInput);
