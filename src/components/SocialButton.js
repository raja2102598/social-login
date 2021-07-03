import React from "react"
import SocialLogin from "react-social-login"
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons"

class SocialButton extends React.Component {
  render() {
    console.log(this.props)
    const { children, triggerLogin, ...props } = this.props
    return (
      <>
        <div className="d-grid gap-2 col-4 mx-auto">
          {this.props.id == "FacebookLoginButton" ? (
            <FacebookLoginButton
              className="btn btn-primary m-2"
              onClick={triggerLogin}
              {...props}
            >
              <span>Sign in With Facebook</span>
            </FacebookLoginButton>
          ) : (
            <></>
          )}
          {this.props.id == "GoogleLoginButton" ? (
            <GoogleLoginButton
              className="btn btn-primary m-2"
              onClick={triggerLogin}
              {...props}
            >
              <span>Sign in With Google</span>
            </GoogleLoginButton>
          ) : (
            <></>
          )}
        </div>
        <br />
      </>
    )
  }
}

export default SocialLogin(SocialButton)
