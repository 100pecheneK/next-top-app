import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

export default function Header({ ...props }: HeaderProps) {
	return <header {...props}>Header</header>
}
