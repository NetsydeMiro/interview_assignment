import { CollectionItem } from "./models/CollectionItem"
import { mockDb } from './mockDb'
import { CollectionsApi } from "./api"
import { DbRow } from "./models/DbRow"

const apiDelayMilliseconds = 1_000

// simulates http delay from server
function delayResponse<T>(reponse: T): Promise<T> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(reponse)
		}, apiDelayMilliseconds)
	})
}

export const mockApi: CollectionsApi = {
	listCollections() {
		return delayResponse(mockDb.collections.list())
	},

	listCollectionItems() {
		return delayResponse(mockDb.collectionItems.list())
	},

	createCollectionItem(item: CollectionItem) {
		return delayResponse(mockDb.collectionItems.add(item))
	},

	updateCollectionItem: function (row: DbRow<CollectionItem>) {
		return delayResponse(mockDb.collectionItems.update(row))
	},

	deleteCollectionItem: function (itemId: number): Promise<"ok"> {
		throw new Error("Function not implemented.")
	},
}
