export type TagProps = {
	size?: 's' | 'm'
	color?: 'primary' | 'secondary' | 'red' | 'gray' | 'green'
	href?: string
	children: React.ReactNode
} & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>
