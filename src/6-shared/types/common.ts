export type Nullable<T> = T | null

export type AnyRecord = { [K in string]: any }

export type AnyFunction = (...args: any[]) => any

export type AnyAsyncFunction = (...args: any[]) => Promise<any>

export type MaybeArray<T> = T | T[]

export type StringedNumber = string | number

export type DateString = string // YYYY-MM-DD

export type DateString2 = string // DD.MM.YYYY

export type DateTimeString = string // YYYY-MM-DD HH-mm-ss

export type DateTimeString2 = string // DD.MM.YYYY HH:mm:ss

export type ISODateTimeString = string // YYYY-MM-DDTHH-mm-ss.fffZ

export type Timestamp = number

export type SortOrder = 'asc' | 'desc'

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
