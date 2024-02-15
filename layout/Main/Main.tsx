import { MainProps } from './Main.props'
import styles from './Main.module.css'

export default function Main({ children, ...props }: MainProps) {
	return <div {...props}>{children}</div>
}
