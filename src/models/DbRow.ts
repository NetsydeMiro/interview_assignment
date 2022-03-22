export interface DbRowColumns {
	id: number
	createdAt: Date
}

export type DbRow<T> = T & DbRowColumns
