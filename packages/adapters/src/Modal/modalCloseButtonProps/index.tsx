import type { CloseButtonProps as ChakraCloseButtonProps } from '@chakra-ui/core';
import { Close } from '@eventespresso/icons';

import './styles.scss';

export interface CloseButtonProps extends Partial<ChakraCloseButtonProps> {
	icon?: React.ComponentType<any>;
}
const modalCloseButtonProps: CloseButtonProps = {
	className: 'ee-confirm-close ee-icon-button ee-icon-button--borderless',
	icon: Close,
};

export default modalCloseButtonProps;
