import React from 'react'

export type MainProps = {
	children: React.ReactNode
} & React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>
