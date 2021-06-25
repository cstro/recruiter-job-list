import React from "react"
import PropTypes from "prop-types"

function SelectableOption({ label, name, checked, onChange }) {
  return (
    <label
      htmlFor={name}
      className="flex items-center mt-1 cursor-pointer text-gray-700 hover:text-gray-900"
    >
      <input
        id={name}
        name={name}
        value={name}
        className="h-4 w-4"
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <span className="ml-3">{label}</span>
    </label>
  )
}

SelectableOption.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectableOption
