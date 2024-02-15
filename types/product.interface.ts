export type ProductCharacteristicType = {
	value: string
	name: string
}

export type ReviewModelType = {
	_id: string
	name: string
	title: string
	description: string
	rating: number
	createdAt: Date
}

export type ProductModelType = {
	_id: string
	categories: string[]
	tags: string[]
	title: string
	link: string
	price: number
	credit: number
	oldPrice: number
	description: string
	characteristics: ProductCharacteristicType[]
	createdAt: Date
	updatedAt: Date
	__v: number
	image: string
	initialRating: number
	reviews: ReviewModelType[]
	reviewCount: number
	reviewAvg?: number
	advantages?: string
	disadvantages?: string
}
