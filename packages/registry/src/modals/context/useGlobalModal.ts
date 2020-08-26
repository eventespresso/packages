import { useMemo, useCallback } from 'react';

import type { GlobalModal } from './types';
import useGlobalModalContext from './useGlobalModalContext';

const useGlobalModal = (name: string): GlobalModal => {
	const { closeModal, isModalOpen, openModal, openModalWithData, setModalData } = useGlobalModalContext();

	const close = useCallback<GlobalModal['close']>(() => closeModal(name), [closeModal, name]);

	const isOpen = useMemo<GlobalModal['isOpen']>(() => isModalOpen(name), [name, isModalOpen]);

	const open = useCallback<GlobalModal['open']>(() => openModal(name), [name, openModal]);

	const openWithData = useCallback<GlobalModal['openWithData']>((data) => openModalWithData(name, data), [
		name,
		openModalWithData,
	]);

	const setData = useCallback<GlobalModal['setData']>((data) => setModalData(name, data), [name, setModalData]);

	return useMemo(() => ({ close, isOpen, open, openWithData, setData }), [
		close,
		isOpen,
		open,
		openWithData,
		setData,
	]);
};

export default useGlobalModal;
