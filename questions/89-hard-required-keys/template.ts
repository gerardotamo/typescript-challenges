export type RequiredKeys<T> = keyof { [k in keyof T as {} extends Pick<T, k> ? never : k]: T[k] }
