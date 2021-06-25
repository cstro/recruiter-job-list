import React from "react"
import PropTypes from "prop-types"

function SelectableOption({ label, name, checked, onChange, value }) {
  return (
    <label htmlFor={name} className="block">
      <input
        id={name}
        name={name}
        value={value}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {label}
    </label>
  )
}

SelectableOption.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectableOption
