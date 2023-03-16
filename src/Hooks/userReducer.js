export const INITIAL_USERS_STATE =  {
 pending: false,
 error: false,
 users: []
}

export const usersReducer = (state, action) =>{
switch (action.type) {
    case "FETCH_POST_PENDING":
     return {
      ...INITIAL_USERS_STATE,
      pending: true,
      error: false,
      users: []
     }
    case "FETCH_POST_FUFILLED":
      return {
        ...INITIAL_USERS_STATE,
        pending: false,
        error: false,
        users: [...action.payload]
        }
    case "FETCH_POST_REJECTED" :
      return {
        ...INITIAL_USERS_STATE,
        pending: false,
        error: {message: `This error occored ➡️ ${action.payload}`},
        users: null
      }
    default:
        return state;
  }
}