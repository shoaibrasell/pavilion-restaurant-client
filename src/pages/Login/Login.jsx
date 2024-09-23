import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisable] = useState(true);

  const {signIn} = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn( email, password )
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
  };
  const hangleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      alert("Captcha Matched");
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
      setDisable(true);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Now!</h1>
        </div>
        <div className="card md:w-1/2 bg-base-100 max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                placeholder="type the text above"
                name="captcha"
                className="input input-bordered"
                required
              />
              <button
                onClick={hangleValidateCaptcha}
                className="btn btn-outline btn-xs mt-4"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p><small>New Here? <Link to="/signup">Create an Account</Link> </small></p> 
        </div>
      </div>
    </div>
  );
};

export default Login;
