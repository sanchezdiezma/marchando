import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/auth',
      withCredentials: true
    })
  }

    signup = (userName, password, email) => this.app.post("/signup", { userName, password, email })
    login = (userName, password) => this.app.post("/login", { userName, password })
    logout = () => this.app.get("/logout")
    isloggedin = () => this.app.get("/isloggedin")
}

export default AuthService