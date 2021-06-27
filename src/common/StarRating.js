import React from "react"
import PropTypes from "prop-types"
import { IoStarSharp } from "react-icons/io5"

function StarRating({ rating, total }) {
  // Create two arrays to map over, one for the yellow stars and one for the
  // gray stars. We map the index as the value to give the stars a unique key
  // for Reacts array rendering rules.
  // https://reactjs.org/docs/lists-and-keys.html#keys

  const activeStars = Array(rating)
    .fill(0)
    .map((val, index) => index)

  const inactiveStars = Array(total - rating)
    .fill(0)
    .map((val, index) => rating + index)

  return (
    <div className="flex flex-row items-center">
      {activeStars.map((key) => (
        <IoStarSharp
          data-test="active-star"
          key={key}
          className="inline-block text-yellow-300"
        />
      ))}
      {inactiveStars.map((key) => (
        <IoStarSharp
          data-test="inactive-star"
          key={key}
          className="inline-block text-gray-300"
        />
      ))}
    </div>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  total: PropTypes.number,
}

StarRating.defaultProps = {
  total: 5,
}

export default StarRating
