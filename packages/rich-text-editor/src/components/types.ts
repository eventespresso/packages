import type { DraftBlockType } from 'draft-js';

type ToggleBlockType = (style: DraftBlockType) => void;

export interface StyleButtonProps {
	active: boolean;
	'aria-label'?: string;
	icon?: React.ReactNode;
	label: string;
	onToggle: ToggleBlockType;
	style: DraftBlockType;
}
