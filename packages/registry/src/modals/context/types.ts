import { Reducer } from 'react';
import type { AnyObject } from '@eventespresso/utils';

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

export interface GlobalModalManager<D = AnyObject> {
	closeModal: (modalName: string) => void;
	getData: () => GlobalModalState;
	getModalData: (modalName: string) => D;
	isModalOpen: (modalName: string) => boolean;
	openModal: (modalName: string) => void;
	openModalWithData: (modalName: string, data: D) => void;
	setModalData: (modalName: string, data: D) => void;
}

export type GlobalModalStateReducer = Reducer<GlobalModalState, GlobalModalAction>;

export interface GlobalModal<D = AnyObject> {
	close: () => void;
	getData: () => D;
	isOpen: boolean;
	open: () => void;
	openWithData: (data: D) => void;
	setData: (data: D) => void;
}
