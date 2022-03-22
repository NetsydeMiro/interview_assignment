// very rudimentary mock database that can execute on the client
// stand-in for a server component that would return data

import { DbRow } from "./models/DbRow"
import { Collection } from "./models/Collection"
import { CollectionItem } from "./models/CollectionItem"

class MockDbTable<T> {
	constructor(private rows: Array<DbRow<T>> = []) { }

	list(): Array<DbRow<T>> { return this.rows.slice() }

	add(data: T): DbRow<T> {
		const row: DbRow<T> = Object.assign({}, data, { id: this.nextId(), createdAt: new Date() })
		this.rows.push(row)
		return row
	}

	update(updatedRow: DbRow<T>): DbRow<T> {
		const row: DbRow<T> = Object.assign({}, updatedRow)
		const index = this.rows.findIndex(r => r.id == row.id)

		if (index >= 0) {
			this.rows.splice(index, 1, row)
			return row
		}
		else throw new Error(`Could not find row with id ${updatedRow.id}`)
	}

	private nextId = () => Math.max(...this.rows.map(r => r.id)) + 1
}

const initialCollections: Array<DbRow<Collection>> = [
	{ id: 1, name: 'Books', createdAt: new Date() },
	{ id: 2, name: 'Movies', createdAt: new Date() },
	{ id: 3, name: 'Video Games', createdAt: new Date() },
]

const initialCollectionItems: Array<DbRow<CollectionItem>> = [
	{ id: 1, collectionId: 1, name: '1984', description: 'Dystopian science fiction novel exploring themes of the individual vs the state.', publishedAt: new Date(1949, 6, 8), createdAt: new Date() },

	{ id: 3, collectionId: 2, name: 'Shawshank Redemption', description: 'Triumphant tale of friendship and redemption.', publishedAt: new Date(1994, 9, 22), createdAt: new Date() },

	{ id: 5, collectionId: 3, name: 'Super Mario Brothers', description: 'The seminal side-scrolling platformer.', publishedAt: new Date(1985, 9, 13), createdAt: new Date() },
]

export const mockDb = {
	collections: new MockDbTable(initialCollections), 
	collectionItems: new MockDbTable(initialCollectionItems)
}