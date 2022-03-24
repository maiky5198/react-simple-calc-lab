import React, { Component } from 'react'

class Calculator extends Component {
    constructor() {
      super()  
      this.state = {
          num1: '',
          num2: '',
          total: ''
     }
    }

    handlenum1 = (event) => {
        this.setState({
            num1: event.target.value
        })
    }


    handlenum2 = (event) => {
        this.setState({
            num2: event.target.value
        })
    }

    added = (event) => {
        this.setState({total: parseInt(this.state.num1) + parseInt(this.state.num2)})
    event.prevent.default()
    }

 
    render () {
        return (
              <div className="container">
              <h1>Add with React!</h1>
            <form onSubmit={this.added}>
              <div className="add">
                <input type="text" value={this.state.num1} onChange={this.handlenum1}/>
                <span>+</span>
                <input type="text" value={this.state.num2} onChange={this.handlenum2}/>
                <button type = "submit"> = </button>
              </div>
            </form>
                <h3>Addition results go here!</h3>
                {this.state.total}
            </div> 
        )
    }
}

export default Calculator






