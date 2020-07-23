'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: 'div'
    }
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      this.timer = window.setTimeout(() => {
        resolve('My App with Async / Await!')
      }, 2000)
    })
  }

  async componentDidMount () {
    try {
      this.setState({
        title: await this.getTitle()
      })
    } catch (error) {
      console.log('ERRO:', error)
    }
  }

  componentWillMount () {
    window.clearTimeout(this.timer)
  }

  render () {
    return (
      <div>
        <this.state.Component>{this.state.title}</this.state.Component>
      </div>
    )
  }
}

export default App
