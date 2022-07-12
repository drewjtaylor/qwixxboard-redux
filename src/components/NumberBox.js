import React from 'react'

const NumberBox = ({value, display}) => {
  if (!value) {
    return <div className='number-box-square'>{display}</div>
  } else {
    return <div className='number-box-square'>X</div>
  }
}

export default NumberBox