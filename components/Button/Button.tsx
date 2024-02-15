import { ButtonProps } from './Button.props'
import styles from './Button.module.css'
import classNames from 'classnames'
import ArrowIcon from './arrow.svg'

export default function Button({
	variant,
	arrow = 'none',
	children,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={classNames(styles.button, className, [styles[variant]])}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={classNames(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	)
}
