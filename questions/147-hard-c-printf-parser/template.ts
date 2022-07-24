export type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

export type ParsePrintFormat<S extends string> = S extends `${string}%${infer A}`
? A extends `${infer F}${infer R}`
  ? [
      ...(F extends keyof ControlsMap ? [ControlsMap[F]] : []),
      ...ParsePrintFormat<R>
    ]
  : []
: [];
