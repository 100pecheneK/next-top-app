import { Heading, Tag } from '../../components'
import { TopPagePropsType } from './TopPage.props'
import styles from './TopPage.module.css'

export default function TopPage({
	page,
	products,
	firstCategory,
}: TopPagePropsType) {
	if (!page) return null
	if (!products) return null
	if (!firstCategory) return null

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Heading lvl={1}>{page.title}</Heading>
				<Tag color='gray' size='m'>
					{products.length}
				</Tag>
				<span>Sort</span>
			</div>
			<div>
				{products.map(p => (
					<div key={p._id}>{p.title}</div>
				))}
			</div>
			<div className={styles['hh-title']}>
				<Heading lvl={2}>Вакансии - {page.category}</Heading>
				<Tag color='red' size='m'>
					hh.ru
				</Tag>
			</div>
			<div className={styles.hh}></div>
		</div>
	)
}
