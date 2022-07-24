type UpperChartPrev = ' ' | ',' | '.' | ''

export type CapitalizeWords<S extends string, Prev extends string = ''> = S extends `${infer F}${infer N}${infer R}`
  ? Prev extends UpperChartPrev
    ? `${Uppercase<F>}${N}${CapitalizeWords<R, N>}`
    : `${F}${N}${CapitalizeWords<R, N>}`
  : S