import React from 'react'
import { Link } from 'react-router-dom'
import { URLS } from '../App'
import { DbRow } from '../models/DbRow'
import { CollectionItem } from '../models/CollectionItem'
import { Collection } from '../models/Collection'

import './CollectionItemTable.scss'

export interface CollectionItemTableProps {
	collection: Collection
	collectionItems: Array<DbRow<CollectionItem>>
}

export function CollectionItemTable(props: CollectionItemTableProps) {

	const rows = props.collectionItems.map((collectionItem, collectionItemIx) => {
		return (
			<tr key={collectionItemIx}>
				<td>{collectionItem.name}</td>
				<td>{collectionItem.description}</td>
				<td>{collectionItem.publishedAt.toString()}</td>
				<td><Link to={URLS.collectionItemViewUrl(props.collection, collectionItem)} className='button is-small is-link'>View</Link></td>
			</tr>
		)
	})

	return (
		<table className='collection table is-hoverable'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Published</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}