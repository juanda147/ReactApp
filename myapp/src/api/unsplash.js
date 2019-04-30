import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fbd7a0f44ffec3e172ff9db53f568d93780340e539b08cea3296c2588baf09c9'
      }
});