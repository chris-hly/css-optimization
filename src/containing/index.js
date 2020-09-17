import React, { Component, PropTypes } from 'react'
import './index.scss'
class Containing extends Component {
  render () {
    return (
      <section className='containing'>
        <div className='containing-body'>
          <p className='containing-content'>
            containing
          </p>
        </div>
      </section>
    )
  }
}

Containing.propTypes = {

}

export default Containing
