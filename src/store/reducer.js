const defaultState = {
  list: [
    {
      id: 1,
      name: 'sleep'
    },
    {
      id: 2,
      name: 'hiking'
    },
    {
      id:3,
      name: 'swimming'
    }
  ]
}

function reducer(state = defaultState, action) {
  switch(action.type) {
    case 'TODO_ADD':
      return {list: [...state.list, action.data]}
    default:
      return state
  }
}

export default reducer
