import React from 'react'
import StarRatings from 'react-star-ratings';

export default function Rating(props) {
  return (
    <StarRatings
          rating={props.rating}
          starRatedColor="orange"
          starDimension="30px"
          starSpacing="5px"
          name='rating'
        />
  )
}
