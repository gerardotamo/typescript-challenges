export type UnionToIntersection<U> = (U extends any ? (arg : U) => any : never) extends (x : infer V) => any ? V : never
