// Write your code here
// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  get = () => {
    const number = Math.floor(Math.random() * 100)

    this.setState({count: number})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <div className="box">
          <h1 className="head">Random Number</h1>
          <p className="warn">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="login-button" onClick={this.get}>
            Generate
          </button>

          <p className="data">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
