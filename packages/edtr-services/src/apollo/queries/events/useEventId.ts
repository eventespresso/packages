const useEventId = (): number => {
	return window?.eventEspressoData?.eventEditor?.event?.dbId || 0;
};

export default useEventId;
