export type CamelCase<S extends string> =
    S extends `${infer F}-${infer B}${infer R}` ?
    B extends '-' ? `${F}-${CamelCase<`${Uppercase<B>}${R}`>}`
    : B extends Uppercase<B> ? S : `${F}${CamelCase<`${Uppercase<B>}${R}`>}` : S
