export type OptionalKeys<T> = keyof { [k in keyof T as {} extends Pick<T, k> ? k : never]: T[k] }
