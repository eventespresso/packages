import React from 'react';

import type { RenderSectionsProps } from './types';
import RenderSection from './RenderSection';

const RenderSections: React.FC<RenderSectionsProps> = ({ dateTimeFormats, locale, sections }) => {
	return (
		<div className='sections-wrapper'>
			{sections.map((section, key) => (
				<RenderSection key={key} {...section} dateTimeFormats={dateTimeFormats} locale={locale} />
			))}
		</div>
	);
};

export default RenderSections;
