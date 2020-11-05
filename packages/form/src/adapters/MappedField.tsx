import React from 'react';

import { RichTextEditor } from '@eventespresso/rich-text-editor';

import Text from './Text';
import Textarea from './Textarea';
import Select from './Select';
import Switch from './Switch';
import MultiCheck from './MultiCheck';
import Radio from './Radio';
import DatePicker from './DatePicker';
import DateTimePicker from './DateTimePicker';
import TimePicker from './TimePicker';
import Hidden from './Hidden';
import NumberField from './Number';
import type { FieldRendererProps } from '../types';

export const MappedField: React.FC<FieldRendererProps> = ({ fieldType, ...props }) => {
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
		case 'rich-text-editor':
			Component = RichTextEditor;
			break;
		case 'timepicker':
			Component = TimePicker;
			break;
		case 'hidden':
			Component = Hidden;
			break;
		default:
			Component = () => null;
			break;
	}

	return Component && <Component {...props} />;
};
