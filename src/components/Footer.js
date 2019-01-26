import React, { Component } from 'react'
import styled from 'styled-components'
import { getAllNum, getTotal } from '../selectors/'

class Footer extends Component {
  render() {
    const { goods, cart } = this.props

    return (
      <Wrap>
        <span>{getAllNum(cart)} 个</span>
        <span>总价￥{getTotal(goods, cart)}另需配送费￥4</span>
        {getTotal(goods, cart) - 20 < 0 ? (
          <span>
            {getTotal(goods, cart) !== 0 ? '差' : ''}￥
            {20 - getTotal(goods, cart)}起送
          </span>
        ) : (
          <span>去结算</span>
        )}
      </Wrap>
    )
  }
}

export default Footer
const Wrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #3b3b3c;
  position: fixed;
  bottom: 0;
  > span {
    color: #ccc;
  }
`
