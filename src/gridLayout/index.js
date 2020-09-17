import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

class GridLayout extends Component {
  render () {
    return (
      <div class='wrapper'>
        <div class='one'>One</div>
        <div class='two'>Two</div>
        <div class='three'>Three</div>
        <div class='four'>Four</div>
        <div class='five'>Five</div>
        <div class='six'>Six</div>
      </div>
    )
  }
}

GridLayout.propTypes = {

}

export default GridLayout
