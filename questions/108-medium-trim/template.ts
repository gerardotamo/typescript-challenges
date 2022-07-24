export type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}`? Trim<R> : 
S extends `${infer R}${' '| '\t' | '\n'}` ? Trim<R> : S