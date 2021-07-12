import { MultiSelect as MultiSelectAdapter, MultiSelectProps } from '@eventespresso/adapters';

import './style.scss';

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
	return <MultiSelectAdapter isMulti className='ee-multi-select' classNamePrefix='ee-multi-select' {...props} />;
};
