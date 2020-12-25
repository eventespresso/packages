import React from 'react';
import classNames from 'classnames';

import { __ } from '@eventespresso/i18n';

import { Popover } from '../';
import Content from './Content';
import Trigger from './Trigger';
import type { TimezoneTimeInfoProps } from './types';

import './style.scss';

export const TimezoneTimeInfo: React.FC<TimezoneTimeInfoProps> = ({ siteTime, userTime, utcTime, ...props }) => {
	const className = classNames(props.className, 'ee-timezone-info');

	return (
		<div className={className}>
			<Popover
				content={<Content siteTime={siteTime} userTime={userTime} utcTime={utcTime} />}
				header={__('This Date Converted To:')}
				placement='top-start'
				trigger={<Trigger tooltip={__('click for timezone information')} />}
			/>
		</div>
	);
};
