//Makes HTTP request and sends the data that is found in local storage
import axios from 'axios'

//Importing data from server
const API_URL = '/api/login/'

const register = async(userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        locaclStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//This can also be put in login as well
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        //Accepting data from the backend
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService;