import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Footer from './Footer'
import './order.css'
import { addToCart, minToCart, getGoods } from '../actions/'
import Bscroll from 'better-scroll'
import { getTopArr } from '../selectors/'

class Order extends Component {
  state = {
    activeTab: '热销榜'
  }
  componentDidMount() {
    const { getGoods } = this.props
    getGoods()
  }
  componentDidUpdate() {
    const { goods } = this.props
    // 只要更新了 props 或者 state 那么下面的判断就会重新执行，所以就会重新生成滚动条，滚动条位置就回到初始位置,要创建滚动条只能执行一次
    if (goods.length && !this.isHaveScroll) {
      // 定义一个全局变量 Bscroll
      this.isHaveScroll = true
      this.Bscroll = new Bscroll(this.foodListWrapper, {
        mouseWheel: true,
        probeType: 3
      })
      const topArr = getTopArr(goods)
      this.Bscroll.on('scroll', ({ y }) => {
        for (let i = 0; i < topArr.length; i++) {
          if (-y >= topArr[i] && -y < topArr[i + 1]) {
            console.log(i)
            this.setState({
              activeTab: i === 0 ? '热销榜' : '优惠榜'
            })
          } else if (-y > topArr[topArr.length - 1]) {
            this.setState({
              activeTab: '精品榜'
            })
          }
        }
      })
    }
  }
  render() {
    const { goods, cart } = this.props
    const { activeTab } = this.state
    return (
      <>
        <Wrap>
          <List>
            {goods.map((ele, index) => (
              <li
                className={activeTab === ele.name ? 'active' : ''}
                onClick={() => {
                  // this.Bscroll.scrollToElement(
                  //   document.querySelectorAll('.food-list>div')[index],
                  //   500
                  // )
                  this.setState({
                    activeTab: ele.name
                  })
                  this.Bscroll.scrollToElement(this[`foodList${index}`], 500)
                }}
                key={ele.id}
              >
                {ele.name}
              </li>
            ))}
          </List>
          <div
            className="food-list-wrapper"
            ref={listWrapper => (this.foodListWrapper = listWrapper)}
          >
            <Products>
              {goods.map((ele, index) => (
                <div ref={e => (this[`foodList${index}`] = e)} key={ele.id}>
                  <h3>{ele.name}</h3>
                  {ele.foods.map(e => (
                    <div key={e.id}>
                      <img src={e.image} alt="" />
                      <div>
                        <span>{e.name}</span>
                        <span>{e.info}</span>
                        <span>
                          ￥{e.price}
                          <span>月售{e.sellCount}份</span>
                          <button
                            className="btn"
                            onClick={() => {
                              this.minToCart(ele.id, e.id, ele.foods)
                            }}
                            disabled={e.num === 0 ? true : false}
                          >
                            -
                          </button>
                          <span>{e.num}</span>
                          <button
                            className="btn"
                            onClick={() => {
                              this.addToCart(ele.id, e.id, ele.foods)
                            }}
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Products>
          </div>
        </Wrap>
        <Footer goods={goods} cart={cart} />
      </>
    )
  }
  addToCart = (id, eid, foods) => {
    const { addToCart } = this.props
    foods.find(e => e.id === eid).num++
    const newFoods = {
      foods: foods
    }
    addToCart(id, eid, newFoods)
  }
  minToCart = (id, eid, foods) => {
    const { minToCart } = this.props
    foods.find(e => e.id === eid).num--
    const newFoods = {
      foods: foods
    }
    minToCart(id, eid, newFoods)
  }
}

const mapStateToProps = state => {
  return {
    goods: state.goods,
    cart: state.cart
  }
}
export default connect(
  mapStateToProps,
  { addToCart, minToCart, getGoods }
)(Order)

const Wrap = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 40px;
  > .food-list-wrapper {
    width: 70%;
    height: calc(100vh - 160px - 40px);
    flex-grow: 1;
    overflow: auto;
  }
`
const List = styled.ul`
  width: 30%;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  li {
    padding: 15% 15%;
    color: #666;
  }
  > .active {
    color: #000;
    background-color: #fff;
  }
`
const Products = styled.div`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  > div h3 {
    margin-top: 5%;
  }
  > div > div {
    display: flex;
    margin-top: 10%;
    align-items: center;
  }
  > div > div:nth-child(2) {
    margin-top: 5%;
  }
  > div > div > img {
    display: block;
    width: 30%;
    height: 30%;
  }
  > div > div > div {
    display: flex;
    flex-direction: column;
    padding-left: 4%;
  }
  > div > div > div > span:first-child {
    color: #111;
  }
  > div > div > div > span:nth-child(2) {
    color: #333;
    font-size: 12px;
  }
  > div > div > div > span:nth-child(3) {
    color: #fb4e44;
    font-size: 20px;
  }
  > div > div > div > span:nth-child(3) > span {
    color: #666;
    font-size: 12px;
    margin-left: 2px;
  }
  > div > div > div > span:nth-child(3) > span:nth-child(3) {
    margin-left: 6px;
  }
`
