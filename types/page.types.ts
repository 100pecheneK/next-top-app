export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export type TopPageAdvantageType = {
	_id: string
	title: string
	description: string
}

export type HhDataType = {
	_id: string
	count: number
	juniorSalary: number
	middleSalary: number
	seniorSalary: number
	updatedAt: Date
}

export type TopPageModelType = {
	tags: string[]
	_id: string
	secondCategory: string
	alias: string
	title: string
	category: string
	seoText?: string
	tagsTitle: string
	metaTitle: string
	metaDescription: string
	firstCategory: TopLevelCategory
	advantages?: TopPageAdvantageType[]
	createdAt: Date
	updatedAt: Date
	hh?: HhDataType
}
