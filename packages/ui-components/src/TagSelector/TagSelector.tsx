import { TagSelector as TagSelectorAdapter, TagSelectorProps } from '@eventespresso/adapters';

export type { TagSelectorProps };

export const TagSelector: React.FC<TagSelectorProps> = (props) => {
	return <TagSelectorAdapter {...props} />;
};
