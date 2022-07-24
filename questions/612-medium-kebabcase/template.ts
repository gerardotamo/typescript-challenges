export type KebabCase<S> = S extends `${infer F}${infer R}` ? 
`${Lowercase<F>}${R extends Uncapitalize<R> ? KebabCase<R> : `-${KebabCase<R>}`}` : S
