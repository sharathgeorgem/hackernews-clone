import React, { Component } from 'react'
import Search from './search'
import Table from './table'
import Button from './button'
import './App.css'

const DEFAULT_QUERY = 'react'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null
    }
  }
  needsToSearchTopStories = searchTerm => {
    return !this.state.results[searchTerm]
  }
  setSearchTopStories = result => {
    const {hits, page} = result
    const {searchKey, results} = this.state
    const oldHits = results && results[searchKey]
      ? results[searchKey].hits
      : []
    const updatedHits = [
      ...oldHits,
      ...hits
    ]
    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page}
      }
    })
  }
  fetchSearchTopStories = (searchTerm, page=0) => {
    const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`
    fetch(url)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => this.setState({error}))
  }
  componentDidMount() {
    const {searchTerm} = this.state
    this.setState({searchKey: searchTerm})
    this.fetchSearchTopStories(searchTerm)
  }
  onDismiss = id => {
    const {searchKey, results} = this.state
    const {hits, page} = results[searchKey]
    const isNotId = item => item.objectID !== id
    const updatedHits = hits.filter(isNotId)
    this.setState({
      results: {
        ...results,
        [searchKey]: {hits: updatedHits, page}
      }
    })
  }
  onSearchSubmit = (event) => {
    const {searchTerm} = this.state
    this.setState({searchKey: searchTerm})
    if(this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm)
    }
    event.preventDefault()
  }
  onSearchChange = event => {
    this.setState({searchTerm: event.target.value})
  }
  render () {
    const { searchTerm, results, searchKey, error } = this.state
    const page = (
      results &&
      results[searchKey] &&
      results[searchKey].page
    ) || 0
    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || []
    return (
      <div className='page'>
        <div className='interactions'>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        { error
          ? <div className='interactions'>
            <p>Oops. Something went wrong</p>
            </div>
          : <Table
              list={list}
              onDismiss={this.onDismiss}
            />
        }
        <div className='interactions'>
          <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
            More
          </Button>
        </div>
      </div>
    )
  }
}

export default App
