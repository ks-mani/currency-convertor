const defaultState = {
    activeId: '',
    activeUser: ''
}

const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
            ...state,
            activeId: action.activeId,
            activeUser: action.activeUser
        }
      case 'LOGOUT':
        return {
            ...state,
            activeId: '',
            activeUser: ''
        }        
      default:
        return defaultState;
    }
  }
  
  export default mainReducer