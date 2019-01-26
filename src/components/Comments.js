import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

class Comments extends Component {
  render() {
    const { ratings } = this.props
    const list = ratings.length ? (
      <List>
        {ratings.map(ele => (
          <li key={ele.rateTime}>
            <img src={ele.avatar} alt="" />
            <span>{ele.username}</span>
            <p>{ele.text}</p>
          </li>
        ))}
      </List>
    ) : (
      <div>请稍等……</div>
    )
    return <div>{list}</div>
  }
}

const mapStateToProps = state => {
  return {
    ratings: state.ratings
  }
}
export default connect(mapStateToProps)(Comments)

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  li {
    color: #666;
    padding: 5% 5%;
  }
  li > img {
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
`
