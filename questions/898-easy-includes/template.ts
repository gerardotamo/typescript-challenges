export type Includes<T extends readonly any[], U> = T extends [infer A, ...infer rest] ? 
  Equal<A,U> extends true ? true : Includes<rest, U> : false
