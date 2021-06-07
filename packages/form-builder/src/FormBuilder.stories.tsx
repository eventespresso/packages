import type { Story, Meta } from '@storybook/react/types-6-0';

import { Heading } from '@eventespresso/ui-components';

import { formSectionsData, formElementsData } from './mockData';
import FormBuilder from './FormBuilder';

import type { FormBuilderProps } from './types';

export default {
	argTypes: {},
	component: FormBuilder,
	title: 'Components/FormBuilder',
} as Meta;

type FormBuilderStory = Story<FormBuilderProps>;

const Template: FormBuilderStory = (args) => (
	<FormBuilder
		{...args}
		containerClassName='ee-edtr-section'
		initialSections={formSectionsData}
		initialElements={formElementsData}
		header={
			<Heading as='h3' className='ee-edtr-section-heading'>
				{'Registration Form Builder'}
			</Heading>
		}
	/>
);

export const Default: FormBuilderStory = Template.bind({});
