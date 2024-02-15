import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import classNames from 'classnames'
import { format } from 'date-fns'

export default function Footer({ className, ...props }: FooterProps) {
	return (
		<footer className={classNames(className, styles.footer)} {...props}>
			<span>
				Misha © 2022 - {format(new Date(), 'yyyy')} Все права защищены
			</span>
			<a href='#'>Пользовательское соглашение</a>
			<a href='#'>Политика конфиденциальности</a>
		</footer>
	)
}
