import React from 'react'
import { NavLink } from 'react-router-dom'
import { Collection } from '../models/Collection'
import { URLS } from '../App'

export interface NavBarProps {
	collections: Array<Collection>
}

export function NavBar(props: NavBarProps) {

	const collectionLinks = props.collections.map((collection, collectionIx) => {
		return (
			<NavLink to={URLS.collectionUrl(collection)} className='navbar-item' key={collectionIx}>
				{collection.name}
			</NavLink>
		)
	})

	return (
		<nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
			<div className='navbar-brand'>

				<NavLink to='/' className='navbar-item'>CollectionDB</NavLink>

				<a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
				</a>
			</div>

			<div className='navbar-menu'>
				<div className='navbar-start'>
					{collectionLinks}
				</div>
			</div>
		</nav>
	)
}