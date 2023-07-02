import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import Logo from "../media/metawa2.png"

const Login = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("componentDidMount");
  });

  function validateForm() {
    return email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="ParentDiv">
      <div className="ImgChildDiv"></div>
      <div className="FormChildDiv">
       <div className="LoginForm">
       <form onSubmit={handleSubmit} className="InputGroup">
        <img className="logoResponse" src={Logo} alt="description of image"></img>
        <h2 className="FormHeading">به متاوا خوش آمدید</h2>
        <h3 className="FormTitle">برای دریافت فصلنامه متاوا لطفا ایمیل خود را وارد کنید</h3>
        {/* below input for name of the user */}
        <input
          type="text"
          name="email"
          placeholder="email"
          className="InputField"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        {/* Login action Button */}
        <button type="submit" disabled={!validateForm()} className="LoginBtn">
          ثبت
        </button>
      </form>

       </div>
      </div>
    </div>
  );
};

export default Login;

