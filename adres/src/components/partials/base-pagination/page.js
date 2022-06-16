import React from 'react'

export default function page({disabled,page, changePage = () => {}}) {
  return (
    <div
    className="
      d-flex
      align-items-center
      justify-content-center
      bg-white
      radius-4
      p-small-medium
      cursor-pointer
      page-number
    "
    disabled={disabled}
    onClick={() => changePage(page + 1)}
  >
  <span>  { page + 1 }</span>
  </div>
  )
}
