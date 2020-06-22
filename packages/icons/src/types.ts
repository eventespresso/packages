import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconName | keyof SvgPath;
	svgSize?: number;
	className?: string;
	viewBox?: string;
	color?: string;
}

export enum IconName {
	CALENDAR = 'calendar',
	EDIT = 'edit',
	FILTER = 'filter',
	GROUPS = 'groups',
	TICKET = 'ticket-alt',
}

export type SvgPath = {
	[key in IconName]: string;
};
