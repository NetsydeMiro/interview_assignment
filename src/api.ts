import { DbRow } from "./models/DbRow"
import { Collection } from "./models/Collection"
import { CollectionItem } from "./models/CollectionItem"
import { mockApi } from "./mockApi"

// contract for our api
export interface CollectionsApi {
	listCollections(): Promise<Array<DbRow<Collection>>> 

	listCollectionItems(): Promise<Array<DbRow<CollectionItem>>> 

	createCollectionItem(item: CollectionItem): Promise<DbRow<CollectionItem>> 

	updateCollectionItem(row: DbRow<CollectionItem>): Promise<DbRow<CollectionItem>> 

	deleteCollectionItem(itemId: number): Promise<'ok'>
}

// api which when implemented would actually make http calls to server
export const api: CollectionsApi = mockApi

