import { Groups } from '@eventespresso/icons';
import { Link } from '../../..';

import './style.scss';

const RegistrationsLink: React.FC<React.ComponentProps<typeof Link>> = ({ href, ...props }) => {
	return <Link {...props} className='ee-editor-details-reg-url-link' href={href} icon={<Groups />} />;
};

export default RegistrationsLink;
