type CurryingFN<T> = T extends (...args : infer A) => infer R 
? A extends [infer F, ...infer Rest] ? (arg : F) => CurryingFN<(...args: Rest) => R> : R : never

export declare function Currying<T>(fn: T): CurryingFN<T>
