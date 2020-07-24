import { BaseProps, OnChangeInput } from '../../types';

export interface OnProps extends BaseProps {
	onChangeMode: OnChangeInput;
	isTheOnlyMode: boolean;
}
