import React from 'react'

export type RatingProps = (
	| {
			rating: number
			editable: boolean
			setRating: (rating: number) => void
	  }
	| {
			rating: number
			editable?: undefined
			setRating?: undefined
	  }
) &
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
