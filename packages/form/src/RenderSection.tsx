import React from 'react';

import type { SectionProps } from './types';
import FormSectionSidebar from './FormSectionSidebar';
import RenderFields from './RenderFields';

const NoIcon: SectionProps['icon'] = () => null;

const RenderSection: React.FC<SectionProps> = ({ name, title, icon = NoIcon, fields, addSectionToFieldNames }) => {
	return (
		<div className='section-wrapper'>
			<FormSectionSidebar title={title} Icon={icon} />
			<div className='section-body'>
				<RenderFields fields={fields} namespace={addSectionToFieldNames ? name : null} />
			</div>
		</div>
	);
};

export default RenderSection;
