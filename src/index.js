import React from 'react'
import './styles.module.css'

export const DropdownComponent = ({
  name,
  className,
  id,
  onChange,
  value,
  firstOption,
  list
}) => {
  const options = list.map((option) => (
    <option key={option} className='item'>
      {option}
    </option>
  ))

  return (
    <select
      name={name}
      className={`select ${className}`}
      id={id}
      onChange={onChange}
      value={value}
      defaultValue={firstOption}
    >
      <option className='item' disabled hidden>
        {firstOption}
      </option>
      {options}
    </select>
  )
}
