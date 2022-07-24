export type GetRequired<T> = {[k in keyof T as {} extends Pick<T, k>? never : k]: T[k]}
