import React from 'react';

import { __ } from '@eventespresso/i18n';

import { TimezoneTimeInfoProps } from './types';

const Content: React.FC<TimezoneTimeInfoProps> = ({ siteTime, userTime, utcTime, className }) => {
	return (
		<div className={className}>
			<div className={'ee-focus-priority-8'}>
				<strong>{__('Your Local Time Zone')}</strong>
			</div>
			<div className={'ee-focus-priority-6'}>{userTime}</div>
			<br />
			<div className={'ee-focus-priority-8'}>
				<strong>{__("The Website's Time Zone")}</strong>
			</div>
			<div className={'ee-focus-priority-6'}>{siteTime}</div>
			<br />
			<div className={'ee-focus-priority-8'}>
				<strong>{__('UTC (Greenwich Mean Time)')}</strong>
			</div>
			<div className={'ee-focus-priority-6'}>{utcTime}</div>
		</div>
	);
};

export default Content;
