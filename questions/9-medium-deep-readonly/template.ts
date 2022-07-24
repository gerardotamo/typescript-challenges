export type DeepReadonly<T> = {readonly [p in keyof T] : keyof T[p] extends never ? T[p] : DeepReadonly<T[p]>} 
