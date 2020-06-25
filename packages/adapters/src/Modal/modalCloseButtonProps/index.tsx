import type { ButtonProps } from '../../Button';
import { Close } from '@eventespresso/icons';

import './styles.scss';

const modalCloseButtonProps: ButtonProps = {
  className: 'ee-icon-button ee-confirm-close',
  icon: Close,
};

export default modalCloseButtonProps;
