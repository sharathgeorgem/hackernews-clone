import React, { Component } from 'react'
import './App.css'

const list = [
  {
    title: 'Steam',
    url: 'https://store.steampowered.com/',
    developer: 'Valve',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Origin',
    url: 'https://www.origin.com/ind/en-us/store',
    developer: 'Effin EA',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

/* function isSearched(searchTerm) {
  return function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  }
} */
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list,
      searchTerm: ''
    }
    // this.onDismiss = this.onDismiss.bind(this)
    // this.onSearchChange = this.onSearchChange.bind(this)
  }
  onDismiss = (id) => {
    const isNotId = item => item.objectID !== id
    const updatedList = this.state.list.filter(isNotId)
    this.setState({list: updatedList})
  }
  onSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }
  render () {
    return (
      <div className='App'>
        <form>
          <input
            type='text'
            onChange={this.onSearchChange}
          />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
          <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.developer}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type='button'
              >
                Dismiss
              </button>
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default App
