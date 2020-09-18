import type { ButtonProps } from '../../Button';
import { Close } from '@eventespresso/icons';

import './styles.scss';

const modalCloseButtonProps: ButtonProps = {
	className: 'ee-confirm-close ee-icon-button ee-icon-button--borderless',
	icon: Close,
};

export default modalCloseButtonProps;
