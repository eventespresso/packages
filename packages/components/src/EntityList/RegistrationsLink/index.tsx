import React from 'react';

import { Groups } from '@eventespresso/icons';
import { Link, LinkProps } from '../../..';

import './style.scss';

const RegistrationsLink: React.FC<LinkProps> = ({ href, ...props }) => {
	return <Link {...props} className='ee-editor-details-reg-url-link' href={href} icon={<Groups />} />;
};

export default RegistrationsLink;
