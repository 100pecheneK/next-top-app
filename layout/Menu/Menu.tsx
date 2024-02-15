import { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { PageItem } from '../../types/menu.types'
import styles from './Menu.module.css'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { firstLevelMenu } from '../../helpers/helpers'

export default function Menu({}) {
	const { menu, firstCategory, setMenu } = useContext(AppContext)
	const router = useRouter()
	function openSecondLevel(secondCategory: string) {
		if (!setMenu) return
		setMenu(
			menu.map(m => {
				if (m._id.secondCategory === secondCategory) {
					m.isOpend = !m.isOpend
				}
				return m
			})
		)
	}
	function buildFirstLevel() {
		return firstLevelMenu.map(m => {
			const isActive = m.id === firstCategory
			return (
				<div key={m.route} className={styles['first-level']}>
					<Link
						href={`/${m.route}`}
						className={classNames(styles['first-level-name'], {
							[styles['first-level-name-active']]: isActive,
						})}
					>
						{m.icon}
						<span>{m.name}</span>
					</Link>
					{isActive && buildSecondLevel(m.route)}
				</div>
			)
		})
	}
	function buildSecondLevel(route: string) {
		return (
			<div className={styles['second-level']}>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
						// m.isOpend = true
					}
					return (
						<div
							key={m._id.secondCategory}
							className={styles['second-level-block']}
						>
							<span onClick={() => openSecondLevel(m._id.secondCategory)}>
								{m._id.secondCategory}
							</span>
							<div
								className={classNames(styles['third-level'], {
									[styles['third-level-active']]: m.isOpend,
								})}
							>
								{buildThirdLevel(route, m.pages)}
							</div>
						</div>
					)
				})}
			</div>
		)
	}
	function buildThirdLevel(route: string, pages: PageItem[]) {
		return pages.map(page => {
			const href = `/${route}/${page.alias}`
			return (
				<Link
					key={page.alias}
					href={href}
					className={classNames(styles['third-level-item'], {
						[styles['third-level-item-active']]: href === router.asPath,
					})}
				>
					{page.category}
				</Link>
			)
		})
	}

	return <ul className={styles.menu}>{buildFirstLevel()}</ul>
}
