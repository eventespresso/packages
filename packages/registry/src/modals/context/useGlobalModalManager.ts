import { useCallback, useMemo, useReducer, useEffect } from 'react';

import type { GlobalModalManager, GlobalModalState } from './types';
import reducer from './reducer';

type GMM = GlobalModalManager;

const INITIAL_STATE: GlobalModalState = {};

const useGlobalModalManager = (): GMM => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	// temporary
	useEffect(() => {
		console.log('Global Modal state', state);
	}, [state]);

	const closeModal: GMM['closeModal'] = useCallback((modalName) => {
		dispatch({ type: 'CLOSE_MODAL', modalName });
	}, []);

	const isModalOpen: GMM['isModalOpen'] = useCallback(
		(modalName) => {
			return state[modalName]?.isOpen;
		},
		[state]
	);

	const openModal: GMM['openModal'] = useCallback((modalName) => {
		dispatch({ type: 'OPEN_MODAL', modalName });
	}, []);

	const openModalWithData: GMM['openModalWithData'] = useCallback((modalName, data) => {
		dispatch({ type: 'SET_MODAL_DATA', modalName, data });
		dispatch({ type: 'OPEN_MODAL', modalName });
	}, []);

	const setModalData: GMM['setModalData'] = useCallback((modalName, data) => {
		dispatch({ type: 'SET_MODAL_DATA', modalName, data });
	}, []);

	return useMemo<GMM>(
		() => ({
			closeModal,
			isModalOpen,
			openModal,
			openModalWithData,
			setModalData,
		}),
		[closeModal, isModalOpen, openModal, openModalWithData, setModalData]
	);
};

export default useGlobalModalManager;
