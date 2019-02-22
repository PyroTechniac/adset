declare module 'adset' {
    class Adset<T> extends Set<T> {
        constructor(iterable?: Iterable<T>);
        private _array: T[];
        private sealed: boolean;

        public set(val: T): this;
        public delete(val: T): boolean;
    }
}