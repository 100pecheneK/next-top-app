import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import { useEffect, useState } from 'react'
import StarIcon from './Star.svg'
import classNames from 'classnames'

export default function Rating({
	rating,
	editable = false,
	setRating,
	...props
}: RatingProps) {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(null)
	)
	function changeDisplay(i: number) {
		if (!editable) return
		constructRating(i)
	}
	function onClick(i: number) {
		if (!editable || !setRating) return
		setRating(i)
	}
	function handleSpace(i: number, e: React.KeyboardEvent<SVGElement>) {
		if (!editable || !setRating) return
		console.log(e.code)

		if (e.code !== 'Space') return
		setRating(i)
	}
	function constructRating(currentRating: number) {
		const updatedRatingArray = ratingArray.map((_, i) => (
			<StarIcon
				key={i}
				className={classNames(styles.star, {
					[styles.fill]: i < currentRating,
					[styles.editable]: editable,
				})}
				onMouseEnter={() => changeDisplay(i + 1)}
				onClick={() => onClick(i + 1)}
				onKeyDown={e => handleSpace(i + 1, e)}
				{...(editable ? { tabIndex: 0 } : {})}
			/>
		))
		setRatingArray(updatedRatingArray)
	}
	useEffect(() => {
		constructRating(rating)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating])

	return (
		<div
			className={styles.rating}
			{...props}
			onMouseLeave={() => changeDisplay(rating)}
		>
			{ratingArray.map((r, i) => (
				<span key={i}>{r}</span>
			))}
		</div>
	)
}
