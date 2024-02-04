import React from 'react'

function GenericComponent (): JSX.Element {
  return (
    <button
      onClick={() => {
        alert('Oi!')
      }}
    >
        Oi
    </button>
  )
}

export default GenericComponent
