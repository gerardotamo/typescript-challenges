export type GetOptional<T> = {[k in keyof T as {} extends Pick<T,k> ? k: never] : T[k]}
