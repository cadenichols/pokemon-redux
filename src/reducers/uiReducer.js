export default function uiReducer(state = {
  sort: 'number'
}, action) {
  switch(action.type) {
    case 'CHANGE_SORT':
      let { value } = action.payload;
      return Object.assign({}, state, { sort: value })
    default:
      return state;
  }
}
