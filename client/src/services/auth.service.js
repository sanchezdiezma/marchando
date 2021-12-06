import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    })
  }

    signup = (userName, email, password) => this.app.post("/signup", { userName, email, password })
    login = (userName, password) => this.app.post("/login", { userName, password })
    logout = () => this.app.get("/logout")
    isloggedin = () => this.app.get("/isloggedin")
}

export default AuthService