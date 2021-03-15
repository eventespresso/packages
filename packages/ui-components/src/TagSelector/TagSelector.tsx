import { TagSelector as TagSelectorAdapter, TagSelectorProps } from '@eventespresso/adapters';
import { FilterTag } from '../';

import './style.scss';

export type { TagSelectorProps };

export const TagSelector: React.FC<TagSelectorProps> = (props) => {
	return (
		<TagSelectorAdapter
			{...props}
			className='ee-tag-selector'
			comboBoxClassName='ee-tag-selector__combobox'
			listClassName='ee-tag-selector__list'
			toggleClassName='ee-tag-selector__toggle'
			SelectedItem={FilterTag}
		/>
	);
};
