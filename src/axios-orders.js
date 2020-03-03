import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://sandwich-react.firebaseio.com/'
})

export default instance