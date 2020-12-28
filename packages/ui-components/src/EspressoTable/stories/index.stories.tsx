import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import ResponsiveTable from '../ResponsiveTable';

import { bodyRows, headerRows } from './data';

export default {
	argTypes: {},
	component: ResponsiveTable,
	title: 'Components/ResponsiveTable/EntityTable',
} as Meta;

const metaData = { tableCaption: 'Event Dates', tableId: 'date-entities-table-view' };

export const Default = () => {
	return <ResponsiveTable bodyRows={bodyRows} headerRows={headerRows} metaData={metaData} />;
};
