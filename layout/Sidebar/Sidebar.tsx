import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import Menu from '../Menu/Menu'
import Logo from '../Logo.svg'
import classNames from 'classnames'

export default function Sidebar({ className, ...props }: SidebarProps) {
	return (
		<div className={classNames(styles.sidebar, className)} {...props}>
			<Logo className={styles.logo} />
			<div>Seacrh</div>
			<Menu />
		</div>
	)
}
