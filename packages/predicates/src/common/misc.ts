type Entity = Record<'id', string>;

export const hasTempId = <E extends Entity>(entity: E): boolean => {
	return entity?.id?.startsWith('temp:');
};
