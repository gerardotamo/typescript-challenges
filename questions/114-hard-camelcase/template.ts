export type CamelCase<S extends string> = S extends `${infer F}${infer C}${infer R}` ?
F extends '_' ? 
`${Uppercase<C>}${CamelCase<R>}` : `${Lowercase<F>}${CamelCase<`${C}${R}`>}`
: Lowercase<S>

