import { TagProps } from './Tag.props'
import styles from './Tag.module.css'
import classNames from 'classnames'

export default function Tag({
	size = 's',
	color = 'secondary',
	href,
	className,
	children,
	...props
}: TagProps) {
	return (
		<div
			className={classNames(styles.tag, styles[size], styles[color], className)}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : children}
		</div>
	)
}
