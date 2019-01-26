const goods = (state = [], action) => {
  switch (action.type) {
    case 'GET_GOODS':
      return action.goods
    case 'ADD_TO_CART':
      const newState = [...state]
      return newState
    case 'MIN_TO_CART':
      const newCart = [...state]
      return newCart
    default:
      return state
  }
}

export default goods
