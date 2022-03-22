import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { URLS } from '../App'
import { dateInputString } from '../format'
import { Collection } from '../models/Collection'
import { CollectionItem } from '../models/CollectionItem'
import { DbRow } from '../models/DbRow'

export interface CollectionItemEditProps {
	collection: DbRow<Collection>
	collectionItems: Array<DbRow<CollectionItem>>
	onSave: (item: DbRow<CollectionItem>) => Promise<string | undefined>
}

export function CollectionItemEdit(props: CollectionItemEditProps) {
	const { id } = useParams()
	const isNew = !id

	let originalItem = props.collectionItems.find(ci => ci.id.toString() == id)

	if (isNew) {
		originalItem = { name: '', description: '', collectionId: props.collection.id } as DbRow<CollectionItem>
	}

	const [editedItem, updateEditedItem] = React.useState(Object.assign({}, originalItem))

	if (!isNew && !originalItem) {
		return <div>Error: No item with id {id} found in {props.collection.name}.</div>
	}

	const title = `${props.collection.name} - ${isNew ? 'New' : 'Edit'}`
	const cancelUrl = isNew ? URLS.collectionUrl(props.collection) : URLS.collectionItemViewUrl(props.collection, editedItem)

	function handleChange<P extends keyof DbRow<CollectionItem>>(prop: P, value: DbRow<CollectionItem>[P]) {
		const updatedItem = Object.assign({}, editedItem)
		updatedItem[prop] = value
		updateEditedItem(updatedItem)
	}

	const handleSave: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		props.onSave(editedItem)
		e.preventDefault()
	}

	return (
		<form>
			<h1 className='title'>{title}</h1>
			<div className='field'>
				<label className='label'>Name</label>
				<div className='control'>
					<input className='input' type='text' placeholder='Name' value={editedItem.name} onChange={e => handleChange('name', e.target.value)} />
				</div>
			</div>

			<div className='field'>
				<label className='label'>Published</label>
				<div className='control'>
					<input className='input' type='date' placeholder='Name' value={dateInputString(editedItem.publishedAt)} onChange={e => handleChange('publishedAt', e.target.valueAsDate || new Date())} />
				</div>
			</div>

			<div className='field'>
				<label className='label'>Description</label>
				<div className='control'>
					<textarea className='textarea' placeholder='Description' value={editedItem.description} onChange={e => handleChange('description', e.target.value)}></textarea>
				</div>
			</div>

			<div className='field is-grouped'>
				<div className='control'>
					<button className='button is-primary' onClick={handleSave}>Submit</button>
				</div>
				<div className='control'>
					<Link to={cancelUrl} className='button is-link is-light'>Cancel</Link>
				</div>
			</div>

		</form>
	)
}