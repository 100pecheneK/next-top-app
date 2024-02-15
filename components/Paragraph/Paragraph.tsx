import { ParagraphProps } from './Paragraph.props'
import styles from './Paragraph.module.css'
import classNames from 'classnames'

export default function Paragraph({
	size = 'l',
	children,
	className,
	...props
}: ParagraphProps) {
	return (
		<p className={classNames(styles[size], className)} {...props}>
			{children}
		</p>
	)
}
