import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

class Header extends Component {
  render() {
    return (
      <Head>
        <div />
        <Ul>
          <li>
            <NavLink to="/" exact>
              点菜
            </NavLink>
          </li>
          <li>
            <NavLink to="/comments">评价</NavLink>
          </li>
          <li>
            <NavLink to="/seller">商家</NavLink>
          </li>
        </Ul>
        <img
          src="http://p0.meituan.net/waimaipoi/f229ffbf46d564f48ef830406a85f10815491.jpg"
          alt=""
        />
      </Head>
    )
  }
}

export default Header
const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 160px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  > div {
    width: 100%;
    height: 100px;
    background-color: #2e2f3a;
  }
  > img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
`
const Ul = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #ccc;
  li {
    margin-bottom: 5px;
  }
  > li > a {
    color: #666;
    border-bottom: 2px solid #fff;
    padding-bottom: 3px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  > li > a.active {
    color: #111;
    border-bottom: 2px solid #00b3d4;
  }
`
