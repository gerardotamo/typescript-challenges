export type Diff<O, O1> = {[key in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: 
    key extends keyof O1 ? O1[key] : key extends keyof O ? O[key] : never}
