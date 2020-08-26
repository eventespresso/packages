import { Reducer } from 'react';
import { AnyObject } from '@eventespresso/utils';

export interface ModalState {
	isOpen?: boolean;
	data: AnyObject;
}

/**
 * state = {
 *     [modalId]: ModalState
 * }
 */
export type GlobalModalState = AnyObject<ModalState>;

export type GlobalModalActionType = 'OPEN_MODAL' | 'CLOSE_MODAL' | 'SET_MODAL_DATA';

export interface GlobalModalAction {
	data?: AnyObject;
	modalName: string;
	type: GlobalModalActionType;
}

export interface GlobalModalManager {
	closeModal: (modalName: string) => void;
	isModalOpen: (modalName: string) => boolean;
	openModal: (modalName: string) => void;
	openModalWithData: (modalName: string, data: AnyObject) => void;
	setModalData: (modalName: string, data: AnyObject) => void;
}

export type GlobalModalStateReducer = Reducer<GlobalModalState, GlobalModalAction>;

export interface GlobalModal {
	close: () => void;
	isOpen: boolean;
	open: () => void;
	openWithData: (data: AnyObject) => void;
	setData: (data: AnyObject) => void;
}
