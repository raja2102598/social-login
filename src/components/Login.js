import React, { useState } from "react"
import Home from "./Home"
import SocialButton from "./SocialButton"

function Login() {
  const [user, setUser] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoggedOut, setisLoggedOut] = useState(false)

  const handleSocialLogin = (user) => {
    console.log(user)
    setUser(user)
    console.log(user)
    setIsLoggedIn(true)
  }
  const handleSocialLoginFailure = (err) => {
    console.error(err)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser([])
    setisLoggedOut(true)
  }
  return isLoggedIn ? (
    <Home userprofile={user} logout={handleLogout} />
  ) : (
    <>
      {isLoggedOut ? (
        <div className="text-end" id="statusTxt" style={{ color: "#A600FF" }}>
          Logged out successfully
          <button
            onClick={() => {
              document.getElementById("statusTxt").style.display = "none"
            }}
            style={{ color: "#A600FF" }}
            className="btn-close"
          ></button>
        </div>
      ) : (
        <></>
      )}

      <p className="display-5 text-center p-3" style={{ color: "#A600FF" }}>
        Create Account
      </p>
      <SocialButton
        provider="facebook"
        appId="345905400271076"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
        id="FacebookLoginButton"
      ></SocialButton>
      <SocialButton
        provider="google"
        appId="50291307518-dtighcmjimc8oojpobplgoe7m6820tr6.apps.googleusercontent.com"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
        id="GoogleLoginButton"
      ></SocialButton>
    </>
  )
}

export default Login
