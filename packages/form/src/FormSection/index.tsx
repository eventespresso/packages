import classNames from 'classnames';

import FormSectionSidebar from '../FormSectionSidebar';
import { RenderFields } from '../RenderFields';
import type { FormSectionProps } from '../types';

import './styles.scss';

const NoIcon: FormSectionProps['icon'] = () => null;

const FormSection: React.FC<FormSectionProps> = ({
	addSectionToFieldNames,
	columns,
	fields,
	icon = NoIcon,
	inline,
	name,
	title,
}) => {
	const className = classNames('ee-form-section-wrapper', columns && `ee-form-section-wrapper--columns-${columns}`);

	return (
		<div className={className}>
			<FormSectionSidebar title={title} Icon={icon} />
			<div className='section-body'>
				<RenderFields fields={fields} inline={inline} namespace={addSectionToFieldNames ? name : null} />
			</div>
		</div>
	);
};

export default FormSection;
