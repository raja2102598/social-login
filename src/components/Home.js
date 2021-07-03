import React from "react"

function Home(props) {
  return (
    <>
      <div className="text-end" id="statusTxt" style={{ color: "#A600FF" }}>
        Login Success
        <button
          onClick={() => {
            document.getElementById("statusTxt").style.display = "none"
          }}
          style={{ color: "#A600FF" }}
          className="btn-close"
        ></button>
      </div>
      <p className="display-5 text-center p-3" style={{ color: "#A600FF" }}>
        User Account
      </p>
      <hr style={{ backgroundColor: "#A600FF" }} />
      <div className="container">
        <div className="row p-5">
          <div className="col-md-3 col-sm-12">
            <img
              src={props.userprofile.profile.profilePicURL}
              alt="image"
              style={{
                borderRadius: "50%",
              }}
              height="180"
              width="180"
            />
          </div>
          <div className="col-md-3 col-sm-12">
            <p>Name</p>
            <h4>{props.userprofile.profile.name}</h4>
          </div>
          <div className="col-sm-12 col-md-3">
            <p className="">Email</p>
            <h4>{props.userprofile.profile.email}</h4>
          </div>
          <div className="col-md-3 col-sm-12 p-5">
            <button className="btn btn-danger" onClick={props.logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
