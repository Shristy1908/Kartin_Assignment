import React from 'react'
import "./LoginPage.css"
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <div className="Container">
        <div className="main">
          <div className="image-container">
            <img src="https://static.vecteezy.com/system/resources/previews/021/796/834/non_2x/cartoon-old-people-happy-aged-citizens-disabled-senior-on-older-wheelchair-and-care-seniors-smiling-photo.jpg" />
          </div>

          <div class="login-container">
            <h1>Login</h1>
            <form className="login-form">
              <input
                type="text"
                placeholder="Enter Username..."
                name="username"
                required
              ></input>

              <input
                type="password"
                placeholder="Enter Your Password..."
                name="password"
                required
              ></input>

              <Link to="/home">
                <button>Login</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
