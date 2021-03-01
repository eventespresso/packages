import FormSection from './FormSection';
import type { RenderSectionsProps } from './types';

const RenderSections: React.FC<RenderSectionsProps> = ({ columns, sections }) => {
	return (
		<div className='sections-wrapper'>
			{sections.map((section, key) => (
				<FormSection key={key} {...section} columns={columns} />
			))}
		</div>
	);
};

export default RenderSections;
