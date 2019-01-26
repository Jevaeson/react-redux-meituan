import axios from 'axios'

export const getGoods = () => {
  return dispatch => {
    axios.get('http://localhost:3008/goods').then(res => {
      dispatch({
        type: 'GET_GOODS',
        goods: res.data
      })
    })
  }
}
export const getRatings = () => {
  return dispatch => {
    axios.get('http://localhost:3008/ratings').then(res => {
      dispatch({
        type: 'GET_RATINGS',
        ratings: res.data
      })
    })
  }
}
export const addToCart = (id, eid, newFoods) => {
  return dispatch => {
    axios.patch(`http://localhost:3008/goods/${id}`, newFoods).then(() => {
      dispatch({
        type: 'ADD_TO_CART',
        id: eid
      })
    })
  }
}

// export const addToCart = id => ({
//   type: 'ADD_TO_CART',
//   id
// })
export const minToCart = (id, eid, newFoods) => {
  return dispatch => {
    axios.patch(`http://localhost:3008/goods/${id}`, newFoods).then(() => {
      dispatch({
        type: 'MIN_TO_CART',
        id: eid
      })
    })
  }
}

// export const addComment = (newComment, clearIuput) => {
//   return dispatch => {
//     axios.post('http://localhost:3008/comments', newComment).then(res => {
//       dispatch({
//         type: 'ADD_COMMENT',
//         comment: res.data
//       })
//       clearIuput()
//     })
//   }
// }
// export const minComment = id => {
//   return dispatch => {
//     axios.delete(`http://localhost:3008/comments/${id}`).then(() => {
//       dispatch({
//         type: 'DEL_COMMENT',
//         id
//       })
//     })
//   }
// }

// export const addLine = (id, newComment) => {
//   return dispatch => {
//     axios
//       .patch(`http://localhost:3008/comments/${id}`, newComment)
//       .then(res => {
//         dispatch({
//           type: 'ADD_LINE',
//           newToalComment: res.data
//         })
//       })
//   }
// }
// export const completed = () => {
//   return dispatch => {
//     axios.get('http://localhost:3008/comments').then(res => {
//       dispatch({
//         type: 'COMPLETED',
//         comments: res.data
//       })
//     })
//   }
// }
// export const active = () => {
//   return dispatch => {
//     axios.get('http://localhost:3008/comments').then(res => {
//       dispatch({
//         type: 'ACTIVE',
//         comments: res.data
//       })
//     })
//   }
// }
// export const clear = id => {
//   return dispatch => {
//     axios.delete(`http://localhost:3008/comments/${id}`).then(() => {
//       axios.get('http://localhost:3008/comments').then(res => {
//         dispatch({
//           type: 'GET_COMMENTS',
//           comments: res.data
//         })
//       })
//     })
//   }
// }
