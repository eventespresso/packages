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

export type BoolField<F extends string> = Record<F, boolean>;

export type EntityFieldPred<Field extends string, FieldType = any> = (entity: Record<Field, FieldType>) => boolean;

export type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

/**
 * Creates a dotted path of a nested object property
 *
 * type Test = {
 * 	foo: {
 * 		bar?: {
 * 			baz: string;
 * 		};
 * 		foo: number;
 * 	};
 * 	bar: number;
 * };
 *
 * type T = DeepKeyOf<Test>; // "bar" | "foo.foo" | "foo.bar.baz"
 */
export type DeepKeyOf<T> = (
	[T] extends [never]
		? ''
		: T extends object
		? {
				[K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DeepKeyOf<T[K]>>}`;
		  }[Exclude<keyof T, symbol>]
		: ''
) extends infer D
	? Extract<D, string>
	: never;
