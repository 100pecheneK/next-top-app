import { TopPageModelType, TopLevelCategory } from '../../types/page.types'
import { ProductModelType } from '../../types/product.interface'

export type TopPagePropsType = {
	page: TopPageModelType
	firstCategory: TopLevelCategory
	products: ProductModelType[]
}
