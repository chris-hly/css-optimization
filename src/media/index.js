import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

class Media extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 50

    }
  }

  handleOnchange = (e) => {
    this.setState({ width: e.target.value })
  }
  render() {
    const { width } = this.state;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="range" value={width} style={{ width: '100px' }} onChange={this.handleOnchange} />
        <iframe
          width={width}
          height="50"
          srcDoc={`<style>  
           @media screen and (min-aspect-ratio: 8/5) {
            body {
                background-color: red
             }
           }

           @media screen and (max-aspect-ratio: 3/2) {
              body {
                 background-color: yellow
              }
            }

            @media screen and (aspect-ratio: 1/1) {
              body {
                  background-color: black
               }
            }
         </style> 
          <div className="chris"> hello</div>`}
        />
      </div>
    )
  }
}

Media.propTypes = {

}

export default Media
