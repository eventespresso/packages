import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import TestForm from './TestForm';

export default {
	argTypes: {},
	title: 'Components/Form',
} as Meta;

export const GrouptWith2Columns = () => {
	return <TestForm columns={2} />;
};

export const GrouptWith3Columns = () => {
	return <TestForm columns={3} />;
};

export const GrouptWith4Columns = () => {
	return <TestForm columns={4} />;
};
