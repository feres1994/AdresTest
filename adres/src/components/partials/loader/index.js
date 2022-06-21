import React from 'react'
import Loader from './loader'
import './index.css'
export default function index() {
  return (
    <div
    className="loader-container d-flex align-items-center justify-content-center"
  >
    <div className="overlay d-flex align-items-center justify-content-center">
      <Loader />
    </div>
  </div>
  )
}
