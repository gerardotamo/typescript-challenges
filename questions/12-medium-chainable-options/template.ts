export type Chainable<T extends object = {}> = {
  option(key: string, value: any): Chainable<T & {[k in string]: any}>
  get(): T
}
