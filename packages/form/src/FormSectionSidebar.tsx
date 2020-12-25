import { Heading } from '@eventespresso/ui-components';

import type { SectionProps } from './types';

const NoIcon: SectionProps['icon'] = () => null;

interface Props {
	desc?: React.ReactNode;
	title?: React.ReactNode;
	Icon?: React.ComponentType<{ className?: string }>;
}

const FormSectionSidebar: React.FC<Props> = ({ desc, Icon = NoIcon, title }) => {
	return (
		<div className='ee-form-section__sidebar'>
			<Icon className='ee-form-section__sidebar-icon' />
			<Heading as='h3' className='ee-form-section__sidebar-heading'>
				{title}
			</Heading>
			{desc && <div className='ee-form-section__sidebar-desc'>{desc}</div>}
		</div>
	);
};

export default FormSectionSidebar;
