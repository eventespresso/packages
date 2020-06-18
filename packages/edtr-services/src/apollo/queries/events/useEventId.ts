const useEventId = (): number => {
	return window?.eeEditorData?.event?.dbId || 0;
};

export default useEventId;
