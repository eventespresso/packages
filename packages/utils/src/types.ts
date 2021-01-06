// intersection of two types
export type Intersection<A, B> = {
	[P in keyof A & keyof B]: A[P] | B[P];
};

// merges two types
export type Merge<A, B> = Omit<A, keyof B> & B extends infer O ? { [K in keyof O]: O[K] } : never;

export interface AnyObject<T = any> {
	[key: string]: T;
}

export interface Disclosure {
	isOpen: boolean;
	onOpen: VoidFunction;
	onClose: VoidFunction;
	onToggle?: VoidFunction;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export type OmitFirstFromArray<T extends any[]> = T extends [infer A, ...infer R] ? R : never;

export type KeysOfType<Obj, Type> = {
	[K in keyof Obj]: Obj[K] extends Type ? K : never;
}[keyof Obj];
