import React from 'react'

const Tile = props => {
  const tileValue = String.fromCodePoint(parseInt(props.value, 16))
  return (
    <div className='tile' onClick={props.onClick}>
      {props.isVisible &&
         <span title = {props.info}>
           {tileValue}
         </span>
      }
    </div>
  )
}

export default Tile
