import { userService } from '../../service/userService';

// THUNK action creators
// Work asynchronously with the service and dispatch actions to the reducers 

export function loadUsers() {
  return async dispatch => {
    try {
      dispatch({ type: 'LOADING_START' })
      const users = await userService.getUsers()
      console.log(users);
      dispatch({ type: 'SET_USERS', users })
    } catch (err) {
      console.log('UserActions: err in loadUsers', err)
    } finally {
      dispatch({ type: 'LOADING_DONE' })
    }
  }
}

export function removeUser(userId) {
  return async dispatch => {
    try {
      // await userService.remove(userId)
      dispatch({ type: 'REMOVE_USER', userId })
    } catch (err) {
      console.log('UserActions: err in removeUser', err)
    }
  }
}


export function login(userCreds) {
  return async dispatch => {
    try {
      // const user = await userService.login(userCreds)
      const user = {
        _id: 11,
        profilePicture: 'assets/person/10.jpeg',
        username: "Rotem Dayan",
        bio: 'React & Node.js developer',
        password: "123456",
        mail: "Harel@gmail.com",
        online: true,
        friendsID: [2, 4, 6, 7, 8, 9],
        git: 'https://github.com/rotemwebdemy',
        linkedin: `https://www.linkedin.com/in/rotemdr-7472401b3/`,
        city: 'Tel Aviv'
      }
      dispatch({ type: 'SET_USER', user })
    } catch (err) {
      console.log('UserActions: err in login', err)
    }
  }
}
export function signup(userCreds) {
  return async dispatch => {
    try {
      // const user = await userService.signup(userCreds)
      const user = {
        id: 1,
        profilePicture: 'assets/person/1.jpeg',
        username: "Safak Kocaoglu",
        bio: 'Node developer',
        password: "123456",
        mail: "Safak@gmail.com"
      }
      dispatch({ type: 'SET_USER', user })
    } catch (err) {
      console.log('UserActions: err in signup', err)
    }
  }
}
export function logout() {
  return async dispatch => {
    try {
      // await userService.logout()
      dispatch({ type: 'SET_USER', user: null })
    } catch (err) {
      console.log('UserActions: err in logout', err)
    }
  }
}
