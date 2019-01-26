import React, { Component } from 'react'
import '../static/gloable.css'
import { connect } from 'react-redux'
import { getGoods, getRatings } from '../actions'
import Main from './Main'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    const { getGoods, getRatings } = this.props
    getGoods()
    getRatings()
  }
  render() {
    return (
      <Router>
        <>
          <Header />
          <Main />
        </>
      </Router>
    )
  }
}

export default connect(
  null,
  { getGoods, getRatings }
)(App)
