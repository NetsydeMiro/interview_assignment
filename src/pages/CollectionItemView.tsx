import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { URLS } from '../App'
import { Collection } from '../models/Collection'
import { CollectionItem } from '../models/CollectionItem'
import { DbRow } from '../models/DbRow'

export interface CollectionItemViewProps {
	collection: Collection
	collectionItems: Array<DbRow<CollectionItem>>
}

export function CollectionItemView(props: CollectionItemViewProps) {
	const { id } = useParams()

	const item = props.collectionItems.find(ci => ci.id.toString() == id)

	if (!item) return (
		<div>Error: No item with id {id} found in {props.collection.name}.</div>
	)

	else return (
		<>
			<h1 className='title'>{props.collection.name}: {item.name}</h1>
			<div>Published: {item.publishedAt.toString()}</div>
			<div>{item.description}</div>
			<Link to={URLS.collectionItemEditUrl(props.collection, item)} className='button is-primary'>Edit</Link>
		</>
	)
}