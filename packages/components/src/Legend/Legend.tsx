import React from 'react';
import { is } from 'ramda';

import { Icon } from '@eventespresso/icons';
import { ColorSwatch } from '../ColorSwatch';
import { DescriptionList } from '../DescriptionList';

import type { LegendProps } from './types';
import type { IconName } from '@eventespresso/icons';

const Legend: React.FC<LegendProps> = ({ direction, legendConfig }) => {
	const { icons, swatches } = legendConfig;

	const iconsSource = icons.map(({ bgClassName, description, icon }) => {
		// @ts-ignore
		const term = (!is(String)(icon) && React.createElement(icon)) || (
			<Icon aria-label={description} name={icon as IconName} svgSize={18} />
		);

		return {
			bgClassName,
			className: 'ee-legend-item',
			description,
			term,
		};
	});

	const swatchesSource = swatches
		? Object.entries(swatches).map(([swatchClassName, description]) => {
				const colorSwatchClassName = 'ee-status-background-color-' + swatchClassName;

				return {
					className: 'ee-legend-item',
					description,
					term: <ColorSwatch className={colorSwatchClassName} label={description} />,
				};
		  })
		: [];

	const dataSource = [...iconsSource, ...swatchesSource];

	return <DescriptionList direction={direction} dataSource={dataSource} />;
};

export default Legend;
