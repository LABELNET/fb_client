/**
 * Created by yuan on 3/1/2017.
 * (1) parse data
 * (2) http : network error : status -1
 */
import http from 'axios'

// config http
http.defaults.baseURL = 'http://localhost:8000/fourbox'
http.defaults.timeout = 2500
http.defaults.headers.post['Content-Type'] = 'application/json'
// cache-control: "max-age=0, private, must-revalidate"
http.defaults.headers.post['Cache-control'] = 'max-age=5'

export default http
