import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { DbRow } from './models/DbRow'
import { Collection } from './models/Collection'
import { CollectionItem } from './models/CollectionItem'
import { api } from './api'

import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { CollectionList } from './pages/CollectionList'
import { CollectionItemView } from './pages/CollectionItemView'
import { CollectionItemEdit } from './pages/CollectionItemEdit'

// removes non-alphanumerics
export const makeUrlSafe = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/gi, '')

export const URLS = {
	collectionUrl: (collection: Collection) => `/${makeUrlSafe(collection.name)}`,
	collectionItemViewUrl: (collection: Collection, collectionItem: DbRow<CollectionItem>) => `${URLS.collectionUrl(collection)}/${collectionItem.id}`, 
	collectionItemEditUrl: (collection: Collection, collectionItem: DbRow<CollectionItem>) => `${URLS.collectionUrl(collection)}/${collectionItem.id}/edit`, 
	collectionItemNewUrl: (collection: Collection) => `${URLS.collectionUrl(collection)}/new`, 
}

function App() {
	const [collections, setCollections] = React.useState<Array<DbRow<Collection>>>([])
	const [collectionItems, setCollectionItems] = React.useState<Array<DbRow<CollectionItem>>>([])
	const [isLoading, setIsLoading] = React.useState(true)

	const navigate = useNavigate()

	React.useEffect(() => {
		const doLoad = async () => {
			const [loadedCollections, loadedCollectionItems] = await Promise.all([api.listCollections(), api.listCollectionItems()])

			setCollections(loadedCollections)
			setCollectionItems(loadedCollectionItems)
			setIsLoading(false)
		}

		doLoad()
	}, [])

	const handleSave = async (savedItem: DbRow<CollectionItem>) => {
		try {
			const isNew = !savedItem.id
			let dbRow: DbRow<CollectionItem> 

			if (isNew) {
				dbRow = await api.createCollectionItem(savedItem)

				collectionItems.push(dbRow)
			}
			else {
				dbRow = await api.updateCollectionItem(savedItem)

				const index = collectionItems.findIndex(ci => ci.id == dbRow.id)
				collectionItems.splice(index, 1, dbRow)
			}

			setCollectionItems(collectionItems)
			const collection = collections.find(c => c.id == dbRow.collectionId)
			navigate(URLS.collectionItemViewUrl(collection!, dbRow))
		}
		catch (err) {
			return String(err)
		}
	}

	const collectionRoutes = collections.map((collection, collectionIx) => {
		const items = collectionItems.filter(ci => ci.collectionId == collection.id)
		return (
			<Route path={URLS.collectionUrl(collection)} key={collectionIx} >
				<Route index element={<CollectionList collection={collection} collectionItems={items} />} />
				<Route path='new' element={<CollectionItemEdit collection={collection} collectionItems={items} onSave={handleSave} />} />
				<Route path=':id/edit' element={<CollectionItemEdit collection={collection} collectionItems={items} onSave={handleSave} />} />
				<Route path=':id' element={<CollectionItemView collection={collection} collectionItems={items} />} />
			</Route>
		)
	})

	return (
		<div className='container'>
			<header>
				<NavBar collections={collections} />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					{collectionRoutes}
				</Routes>
			</main>
		</div>
	)
}

export default App
