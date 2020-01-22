// 保存表单数据
export const addCounter = (count) => {
  return dispatch => {
    dispatch({
      type: 'addCounter',
      count
    })
  }
}
