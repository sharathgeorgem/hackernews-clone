import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    const user = {
      firstName: 'Sharath',
      lastName: 'George M'
    }
    console.log(user.lastName)
    return (
      <div className='App'>
        <h1>{user.firstName}</h1>
        <h2>{user.lastName}</h2>
      </div>
    )
  }
}

export default App
