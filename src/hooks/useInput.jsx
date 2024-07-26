import React, { useState } from 'react'

const useInput = (initialvalue) => {
  const [value, setValue] = useState(initialvalue);
  const onChange = (e) => {
      setValue(e.target.value)
  }
  return {
    value,
    onChange
    }
}

export default useInput