/**
 * Created by yuan on 3/1/2017.
 * (1) parse data
 * (2) http : network error : status -1
 */
import http from 'axios'

// config http
http.defaults.baseURL = 'http://localhost:8000/fb'
http.defaults.timeout = 2500
http.defaults.headers.post['Content-Type'] = 'application/json'

export default http
