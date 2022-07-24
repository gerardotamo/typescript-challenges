export type AppendToObject<T extends object, U extends string, V> = {[key in keyof T | U] : key extends keyof T ? T[key] : V }
