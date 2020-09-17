import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
class Flexible extends Component {
  render() {
    return (
      <article className="flex">
        {/* {
          [1, 2, 3, 4, 5, 6, 7].map(item => <div key={item} className={`flex-child ${'flex-child-' + item}`}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => item + '你啊')
            }

          </div>)
        } */}
        <div style={{ lineHeight: '40px'}}>
          div1
        </div>
        <div>
          div2
        </div>
      </article>
    )
  }
}

Flexible.propTypes = {

}

export default Flexible
