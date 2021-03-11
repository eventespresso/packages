import { forwardRef } from 'react';
import { Tag, TagLabel, TagCloseButton } from '@chakra-ui/react';

export type SelectedItemProps = {
	onClose?: VoidFunction;
};

export const SelectedItem = forwardRef<HTMLSpanElement, SelectedItemProps>(({ children, onClose, ...rest }, ref) => {
	return (
		<Tag {...rest} ref={ref}>
			<TagLabel>{children}</TagLabel>
			<TagCloseButton onClick={onClose} />
		</Tag>
	);
});
