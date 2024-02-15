import { TopLevelCategory } from './page.types'

export type PageItem = {
	alias: string
	title: string
	_id: string
	category: string
}

export type MenuItem = {
	_id: {
		secondCategory: string
	}
	isOpend?: boolean
	pages: PageItem[]
}

export type FirstLevelMenuItem = {
	route: string
	name: string
	icon: JSX.Element
	id: TopLevelCategory
}
