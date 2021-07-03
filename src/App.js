import "./App.css"
import Login from "./components/Login"

function App() {
  return (
    <>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#8934B7" }}>
        <div className="container-fluid">
          <a className="navbar-brand">
            Social Login
          </a>
        </div>
      </nav>
      <div className="container">
      <Login />
      </div>
    </>
  )
}

export default App
