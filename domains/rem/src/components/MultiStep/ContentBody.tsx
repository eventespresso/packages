import React from 'react';

import { EditRecurrence } from '../EditRecurrence';
import EditDatetime from '../EditDatetime';
import Tickets from '../Tickets';

import Steps from './Steps';

import type { ContentBodyProps } from './types';
import { useDatetime, useStepsState } from '../../context';

const ContentBody: React.FC<ContentBodyProps> = () => {
	const { current } = useStepsState();
	const datetime = useDatetime();

	return (
		<div>
			<Steps current={current} />
			{current === 0 && (
				<>
					<EditRecurrence />
				</>
			)}

			{current === 1 && <EditDatetime datetime={datetime} />}
			{current === 2 && <Tickets />}
		</div>
	);
};

export default ContentBody;
