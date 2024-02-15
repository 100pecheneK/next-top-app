import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'

export default function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<Main className={styles.main}>{children}</Main>
			<Footer className={styles.footer} />
		</div>
	)
}
