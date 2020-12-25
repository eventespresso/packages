import classNames from 'classnames';

import { TextInput, TextInputProps } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';

interface SearchInputProps extends TextInputProps {
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
