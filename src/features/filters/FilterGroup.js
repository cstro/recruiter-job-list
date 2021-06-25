import React from "react"
import PropTypes from "prop-types"

function FilterGroup({ title, children }) {
  return (
    <div className="mb-8">
      <div className="text-gray-500 text-sm mb-4">{title}</div>
      {children}
    </div>
  )
}

FilterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default FilterGroup
