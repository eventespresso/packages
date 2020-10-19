export type Listener = (...args: any[]) => void;

export type Events = {
	[event: string]: Listener[];
};
