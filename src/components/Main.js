import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Seller from './Seller'
import Comments from './Comments'
import Order from './Order'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

class Main extends Component {
  render() {
    // const { goods } = this.props
    // console.log(goods)
    return (
      <Wrap>
        <Switch>
          <Route component={Seller} path="/seller" />
          <Route component={Comments} path="/comments" />
          <Route component={Order} path="/" />
        </Switch>
      </Wrap>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     goods: state.goods
//   }
// }
// export default connect(mapStateToProps)(Main)
export default Main
const Wrap = styled.div`
  padding-top: 160px;
`
