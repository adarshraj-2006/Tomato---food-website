import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./LoginPopup.css"
import { assets } from "../../assets/assets"
import { useAuth } from "../context/AuthContext/AuthContext"

const LoginPopup = ({ setShowLogin, showLogin }) => {
  const [currState, setCurrentState] = useState("Login")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const { login, signup, isLoading } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      if (currState === "Login") {
        await login(formData.email, formData.password)
      } else {
        if (!formData.name) {
          setError("Name is required")
          return
        }
        await signup(formData.name, formData.email, formData.password)
      }
      setShowLogin(false)
      navigate("/")
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.")
    }
  }

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        {error && (
          <div className="login-popup-error" style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>
            {error}
          </div>
        )}

        <div className="login-popup-inputs">
          {currState === "Sign up" && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Please wait..." : currState === "Sign up" ? "Create account" : "Login"}
        </button>

        {currState === "Sign up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        )}

        {currState === "Login" ? (
          <p>
            Create a new account{" "}
            <span onClick={() => setCurrentState("Sign up")}>Click</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPopup
