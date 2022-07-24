export type ToNumber<S extends string, L extends number[] = []> = S extends `${number}` ?
    `${L['length']}` extends S
    ? L['length']
    : ToNumber<S, [...L, 0]>
    : never
