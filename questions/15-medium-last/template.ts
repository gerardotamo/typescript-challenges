export type Last<T extends any[]> = T extends [...any, infer A] ? A : never
