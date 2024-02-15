export type ButtonProps = {
	children: React.ReactNode
	variant: 'primary' | 'secondary'
	arrow?: 'right' | 'down' | 'none'
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>
