import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React, { useState } from 'react'
import axios from 'axios'
import withLayout from '../layout/withLayout'

function Search() {
	return <>Search</>
}

export default withLayout(Search)

// export const getStaticPaths: GetStaticPaths = async () => {
// 	let paths: string[] = []
// 	for (const m of firstLevelMenu) {
// 		const { data: menu } = await axios.post<MenuItem[]>(
// 			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
// 			{ firstCategory: m.id }
// 		)
// 		const menuPaths = menu.flatMap(s =>
// 			s.pages.map(p => `/${m.route}/${p.alias}`)
// 		)
// 		paths = [...paths, ...menuPaths]
// 	}

// 	return {
// 		paths,
// 		fallback: true,
// 	}
// }
// export const getStaticProps: GetStaticProps<CoursePropsType> = async ({
// 	params,
// }: GetStaticPropsContext<ParsedUrlQuery>) => {
// 	if (!params) return { notFound: true }
// 	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
// 	if (!firstCategoryItem) return { notFound: true }
// 	try {
// 		const { data: menu } = await axios.post<MenuItem[]>(
// 			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
// 			{ firstCategory: firstCategoryItem.id }
// 		)
// 		if (menu.length === 0) return { notFound: true }
// 		const { data: page } = await axios.get<TopPageModelType>(
// 			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
// 		)
// 		const { data: products } = await axios.post<ProductModelType[]>(
// 			process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
// 			{ category: page.category, limit: 10 }
// 		)
// 		return {
// 			props: {
// 				menu,
// 				page,
// 				products,
// 				firstCategory: firstCategoryItem.id,
// 			},
// 		}
// 	} catch (error) {
// 		return { notFound: true }
// 	}
// }
// type CoursePropsType = {
// 	menu: MenuItem[]
// 	page: TopPageModelType
// 	firstCategory: TopLevelCategory
// 	products: ProductModelType[]
// }
