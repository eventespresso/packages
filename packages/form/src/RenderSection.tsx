import React from 'react';

import type { SectionProps } from './types';
import FormSectionSidebar from './FormSectionSidebar';
import RenderFields from './RenderFields';

const NoIcon: SectionProps['icon'] = () => null;

const RenderSection: React.FC<SectionProps> = ({
	addSectionToFieldNames,
	dateTimeFormats,
	fields,
	icon = NoIcon,
	name,
	locale,
	title,
}) => {
	return (
		<div className='section-wrapper'>
			<FormSectionSidebar title={title} Icon={icon} />
			<div className='section-body'>
				<RenderFields
					dateTimeFormats={dateTimeFormats}
					fields={fields}
					locale={locale}
					namespace={addSectionToFieldNames ? name : null}
				/>
			</div>
		</div>
	);
};

export default RenderSection;
