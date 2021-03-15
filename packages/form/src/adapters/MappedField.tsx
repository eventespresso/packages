import { memo } from 'react';

import Text from './Text';
import Textarea from './Textarea';
import TagSelector from './TagSelector';
import Select from './Select';
import Switch from './Switch';
import MultiCheck from './MultiCheck';
import Radio from './Radio';
import DatePicker from './DatePicker';
import DateTimePicker from './DateTimePicker';
import TimePicker from './TimePicker';
import SimpleTextEditor from './SimpleTextEditor';
import Hidden from './Hidden';
import NumberField from './Number';
import WPMediaImage from './WPMediaImage';
import { fieldPropsAreEqual } from '../utils';
import type { FieldRendererProps } from '../types';

const DefaultComponent = () => null;

export const MappedField: React.FC<FieldRendererProps> = ({ fieldType, wrapper: Wrapper, ...props }) => {
	let Component: React.ComponentType<Omit<FieldRendererProps, 'fieldType'>>;

	switch (fieldType) {
		case 'datepicker':
			Component = DatePicker;
			break;
		case 'datetimepicker':
			Component = DateTimePicker;
			break;
		case 'text':
			Component = Text;
			break;
		case 'number':
			Component = NumberField;
			break;
		case 'textarea':
			Component = Textarea;
			break;
		case 'select':
			Component = Select;
			break;
		case 'switch':
			Component = Switch;
			break;
		case 'multicheck':
			Component = MultiCheck;
			break;
		case 'radio':
			Component = Radio;
			break;
		case 'simple-text-editor':
			Component = SimpleTextEditor;
			break;
		case 'timepicker':
			Component = TimePicker;
			break;
		case 'tag-selector':
			Component = TagSelector;
			break;
		case 'hidden':
			Component = Hidden;
			break;
		case 'wpmedia-image':
			Component = WPMediaImage;
			break;
		default:
			Component = DefaultComponent;
			break;
	}

	return Wrapper ? <Wrapper {...props} fieldType={fieldType} component={Component} /> : <Component {...props} />;
};

export default memo(MappedField, fieldPropsAreEqual);
