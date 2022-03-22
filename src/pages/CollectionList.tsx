import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { makeUrlSafe, URLS } from '../App'

import { DbRow } from '../models/DbRow'
import { Collection } from '../models/Collection'
import { CollectionItem } from '../models/CollectionItem'

import { CollectionItemTable } from '../components/CollectionItemTable'

export interface CollectionListProps {
	collection: Collection
	collectionItems: Array<DbRow<CollectionItem>>
}

export function CollectionList(props: CollectionListProps) {
	return (
		<>
			<div className='columns'>
				<div className='column'>
					<h1 className='title'>{props.collection.name}</h1>
				</div>
				<div className='column has-text-right'>
					<Link to={URLS.collectionItemNewUrl(props.collection)} className='button is-primary'>New</Link>
				</div>
			</div>

			<CollectionItemTable collection={props.collection} collectionItems={props.collectionItems} />
		</>
	)
}