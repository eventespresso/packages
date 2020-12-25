import FormSectionSidebar from './FormSectionSidebar';
import RenderFields from './RenderFields';
import type { SectionProps } from './types';

const NoIcon: SectionProps['icon'] = () => null;

const RenderSection: React.FC<SectionProps> = ({
	addSectionToFieldNames,
	fields,
	icon = NoIcon,
	inline,
	name,
	title,
}) => {
	return (
		<div className='section-wrapper'>
			<FormSectionSidebar title={title} Icon={icon} />
			<div className='section-body'>
				<RenderFields fields={fields} inline={inline} namespace={addSectionToFieldNames ? name : null} />
			</div>
		</div>
	);
};

export default RenderSection;
