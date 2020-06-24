import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
	className?: string;
	color?: string;
	name?: IconName | keyof SvgPath;
	noMargin?: boolean;
	size?: IconSize
	svgSize?: number;
	viewBox?: string;
}

export enum IconName {
	CALENDAR = 'calendar',
	EDIT = 'edit',
	FILTER = 'filter',
	GROUPS = 'groups',
	TICKET = 'ticket-alt',
}

export type IconSize = 'big' | 'bigger' | 'small' | 'smaller' | 'tiny';

export type SvgPath = {
	[key in IconName]: string;
};
