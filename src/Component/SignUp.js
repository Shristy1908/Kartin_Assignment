
import "./SignUp.css";
import { Link } from 'react-router-dom';
import img from '../Media/signupimage.jpg'

const SignUp = () => {

  return (
    <div className="Container">
      <div className="main">
        <div className="image-container">
          <img alt="SignImage" src={img}/>
        </div>
        <div class="signup-container">
          <h1>Sign Up</h1>
          <form className="signup-form">
            <input
              type="text"
              placeholder="Enter Username..."
              name="username"
              required
            ></input>

            <input
              type="number"
              placeholder="Enter Your Phone..."
              required
            ></input>

            <input
              type="email"
              placeholder="Enter Your Email..."
              name="email"
              required
            ></input>

            <input
              type="password"
              placeholder="Enter Your Password..."
              name="password"
              required
            ></input>

            <div className="gender">
              <label>Gender</label>

              <label htmlFor="gender">
                <input
                  className="genderinput"
                  type="radio"
                  name="gender"
                  value="Male"
                />
                Male
              </label>
              <label htmlFor="gender">
                <input
                  className="genderinput"
                  type="radio"
                  name="gender"
                  value="Female"
                />
                Female
              </label>

              <label htmlFor="gender">
                <input
                  className="genderinput"
                  type="radio"
                  name="gender"
                  value="Other"
                />
                Other
              </label>
            </div>
            {/* <a href="LoginPage.js"> */}
            <Link to="/login">
              <button>
                Sign Up
              </button>
            </Link>
            
            {/* </a> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp