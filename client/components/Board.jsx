import React from 'react'

import Tile from './Tile'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tile1: null
    }
    this.onClick = this.handleClick.bind(this)
  }

  handleClick (id) {
    const tile = this.props.find(tile => tile.id === id)
    tile.isVisible = true
  }

  render () {
    return <div className='tiles'>
      {this.props.tiles.map(tile => {
        return <Tile
          key={tile.id}
          info={tile.info}
          value={tile.value}
          isVisible={tile.isVisible}
          onClick={this.handleClick.bind(tile.id)}/>
      })}
    </div>
  }
}

export default Board
