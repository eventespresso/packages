import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { RegistrationOptionsMetaBox } from './index';
import type { RegistrationOptionsMetaBoxProps } from './types';

export default {
	argTypes: {},
	component: RegistrationOptionsMetaBox,
	title: 'Components/EDTR/RegistrationOptionsMetaBox',
} as Meta;

type RegistrationOptionsMetaBoxStory = Story<RegistrationOptionsMetaBoxProps>;

export const Default: RegistrationOptionsMetaBoxStory = () => <RegistrationOptionsMetaBox />;
