import React, { useState } from "react"
import validator from "validator"


let handleForm = (e) => {
  e.preventDefault()
}

function Form() {
  return (
      <form onSubmit={handleForm}>
        <input />
      </form>
  )
}

export default Form
