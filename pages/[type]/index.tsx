import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import axios from 'axios'
import withLayout from '../../layout/withLayout'
import { firstLevelMenu } from '../../helpers/helpers'
import { MenuItem } from '../../types/menu.types'
import { ParsedUrlQuery } from 'querystring'
import { TopLevelCategory } from '../../types/page.types'

type TypePropsType = {
	menu: MenuItem[]
	firstCategory: TopLevelCategory
}

function Type({ firstCategory }: TypePropsType) {
	return <>{firstCategory}</>
}

export default withLayout(Type)

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map(m => '/' + m.route),
		fallback: true,
	}
}
export const getStaticProps: GetStaticProps<TypePropsType> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) return { notFound: true }
	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
	if (!firstCategoryItem) return { notFound: true }
	try {
		const { data: menu } = await axios.post<MenuItem[]>(
			process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
			{ firstCategory: firstCategoryItem.id }
		)
		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
			},
		}
	} catch (error) {
		return { notFound: true }
	}
}
