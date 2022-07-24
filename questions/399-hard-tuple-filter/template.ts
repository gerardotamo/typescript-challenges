export type FilterOut<T extends any[], F, Result extends any[] = []> = T extends [infer First, ...infer R]
    ? [First] extends [F]
    ? FilterOut<R, F, Result>
    : FilterOut<R, F, [...Result, First]>
    : Result
