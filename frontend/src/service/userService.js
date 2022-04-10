import { storageService } from './generalService/asyncStorageService'
import { httpService } from './generalService/httpService'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
    getEmptySignup,
    getEmptyLogin
}

window.userService = userService
    // Note: due to async, must run one by one...
    // userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 100, isAdmin: false})
    // userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 100, isAdmin: true})

function getEmptySignup() {
    return {
        profilePicture: '',
        username: '',
        bio: '',
        password: '',
        mail: ''
    }
}

function getEmptyLogin() {
    return {
        mail: '',
        password: ''
    }
}

function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

function getById(userId) {
    return storageService.get('user', userId)
        // return httpService.get(`user/${userId}`)
}

function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    // return storageService.put('user', user)
    user = await httpService.put(`user/${user._id}`, user)
        // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function login(userCred) {
    return {
        _id: 11,
        profilePicture: 'assets/person/10.jpeg',
        username: "rotem dayan",
        bio: 'React & Node.js developer',
        password: "123456",
        mail: "rotem@gmail.com",
        online: true,
        friendsID: [2, 4, 6, 7, 8, 9],
        git: 'https://github.com/rotem',
        linkedin: `https://www.linkedin.com/in/rotem-7472401b3/`,
        city: 'Tel Aviv'
    }
}

async function signup(userCred) {
    // const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // return _saveLocalUser(user)
    return {
        _id: 11,
        profilePicture: 'assets/person/10.jpeg',
        username: "Rotem dayan",
        bio: 'React & Node.js developer',
        password: "123456",
        mail: "rotem@gmail.com",
        online: true,
        friendsID: [2, 4, 6, 7, 8, 9],
        git: 'https://github.com/rotem',
        linkedin: `https://www.linkedin.com/in/rotem-7472401b3/`,
        city: 'Tel Aviv'
    }
}
async function logout() {
    // sessionStorage.clear()
    // return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}