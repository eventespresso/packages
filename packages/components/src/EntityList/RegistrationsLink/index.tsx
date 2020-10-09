import React from 'react';

import { Groups } from '@eventespresso/icons';
import { Link, LinkProps } from '../../..';

import './style.scss';

interface Props extends LinkProps {
	href: string;
}

const RegistrationsLink: React.FC<Props> = ({ href, ...props }) => {
	return <Link className='ee-editor-details-reg-url-link' href={href} icon={<Groups />} {...props} />;
};

export default RegistrationsLink;
