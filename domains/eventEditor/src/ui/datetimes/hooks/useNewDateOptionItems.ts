import { useNewEntityOptionItems } from '@edtrHooks/index';

const useNewDateOptionItems = (): Array<React.ReactNode> => {
	return useNewEntityOptionItems('datetime');
};

export default useNewDateOptionItems;
