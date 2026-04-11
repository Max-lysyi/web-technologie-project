import React, { useEffect, useState } from 'react'

const Lab1 = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    
    setText('Hello World!')
  }, [])

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default Lab1
