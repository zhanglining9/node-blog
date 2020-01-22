let defaultState = {
  count: 0
}
// 首页表单数据
export const counter = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'addCounter':
      return { ...state, ...{ count: action.count } }
    default:
      return state
  }
}
