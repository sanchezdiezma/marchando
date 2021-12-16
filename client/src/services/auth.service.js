import axios from "axios";

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
      withCredentials: true,
    });
  }

  signup = (userName, password, email, role) =>
    this.app.post("/signup", { userName, password, email, role });
  login = (userName, password) =>
    this.app.post("/login", { userName, password });
  logout = () => this.app.get("/logout");
  isloggedin = () => this.app.get("/isloggedin");
}

export default AuthService;
