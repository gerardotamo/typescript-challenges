export type Awaited<T> = T extends Promise<infer U> ? U extends Promise<any> ? Awaited<U> : U : T
