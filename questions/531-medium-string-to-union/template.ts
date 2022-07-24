export type StringToUnion<T extends string, U = never> = T extends `${infer F}${infer R}` ? StringToUnion<R, U | F> : U
