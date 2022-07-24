export type MyReadonly2<T, K extends keyof T = keyof T> = {readonly [k in keyof T] : T[k];} & Omit<T,K>
