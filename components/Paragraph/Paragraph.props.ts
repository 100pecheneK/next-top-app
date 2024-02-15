export type ParagraphProps = {
	size?: 's' | 'm' | 'l'
	children: React.ReactNode
} & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLParagraphElement>,
	HTMLParagraphElement
>
