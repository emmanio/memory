import React from 'react'

import Tile from './Tile'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tile1: null,
      tile2: null
    }
    this.checkPair = this.checkPair.bind(this)
    this.onClick = this.handleClick.bind(this)
  }

  handleClick (id) {
    const {tile1} = this.state
    const tile = this.props.tiles.find(tile => tile.id === id)
    tile.isVisible = true

    tile1 === null ? this.setState({tile1: tile}) : this.setState({tile2: tile}, this.checkPair)
  }

  checkPair () {
    const {tile1, tile2} = this.state
    const isMatch = tile1.value === tile2.value

    const checkMatch = () => {
      this.setState({
        tile1: null,
        tile2: null
      })
      this.props.evalMatch(tile1, tile2)
    }
    isMatch ? checkMatch() : setTimeout(checkMatch, 1000)
  }

  render () {
    return <div className='tiles'>
      {this.props.tiles.map(tile => {
        return <Tile
          key={tile.id}
          info={tile.info}
          value={tile.value}
          isVisible={tile.isVisible}
          onClick={this.handleClick.bind(this, tile.id)}/>
      })}
    </div>
  }
}

export default Board
