import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import { Heading, Button, Paragraph, Tag, Rating } from '../components'
import withLayout from '../layout/withLayout'
import { MenuItem } from '../types/menu.types'
import axios from 'axios'

function Home({ menu }: HomePropsType) {
	const [rating, setRating] = useState(3)

	return (
		<>
			<Component title='Heading'>
				<Heading lvl={1}>Lorem ipsum dolor assumenda</Heading>
				<Heading lvl={2}>Lorem ipsum dolor assumenda</Heading>
				<Heading lvl={3}>Lorem ipsum dolor assumenda</Heading>
			</Component>

			<Component title='Button'>
				{['primary', 'secondary'].map((variant: any) => (
					<span key={variant}>
						<Button variant={variant}>Button</Button>
						<Button variant={variant} arrow='right'>
							Button
						</Button>
						<Button variant={variant} arrow='down'>
							Button
						</Button>
					</span>
				))}
			</Component>

			<Component title='Paragraph'>
				{['l', 'm', 's'].map((size: any) => (
					<Paragraph key={size} size={size}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
						voluptatibus maxime id sit veritatis placeat, non minima laboriosam
						aliquam magnam ullam sed provident eius pariatur vero, fugiat
						dolore, incidunt optio?
					</Paragraph>
				))}
			</Component>

			<Component title='Tag'>
				{['primary', 'secondary', 'gray', 'green', 'red'].map((color: any) => (
					<span key={color}>
						<Tag size='s' color={color}>
							{color}
						</Tag>
						<Tag size='m' color={color}>
							{color}
						</Tag>
					</span>
				))}
				<Tag href='#' size='m' color='primary'>
					primary link
				</Tag>
			</Component>
			<Component title='Rating'>
				<Rating rating={rating} />
				<Paragraph size='m'>Editable:</Paragraph>
				<Rating rating={rating} editable setRating={setRating} />
			</Component>
			<Component title='Menu'>
				<ul>
					{menu.map(m => (
						<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
					))}
				</ul>
			</Component>
		</>
	)
}
function Component({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<>
			<h1 style={{ marginBottom: '0.5em' }}>{title}</h1>
			{children}
			<hr style={{ marginTop: '1em' }} />
		</>
	)
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomePropsType> = async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		}
	)
	return {
		props: {
			menu,
			firstCategory,
		},
	}
}
type HomePropsType = {
	menu: MenuItem[]
	firstCategory: number
}
