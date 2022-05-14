import { logo, loginSide } from 'Assets';
import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className="flex-signup">
            <div className="login-data-sid">
                <div className="top-signup">
                    <img className="pt-3" src={logo} alt="logo" />
                    <h2 className="heading pt-5">Hello, welcome back</h2>
                    <h5 className="signup-input-tag">Good to see you again!</h5>
                </div>
                <div className="data-signup">
                    <div className="input-group-login">
                        <h5 className="signup-input-tag">EMAIL ADDRESS</h5>
                        <input type="email" className="login-input" placeholder="Examples: example@gmail.com" />
                    </div>
                    <div className="input-group-signup">
                        <h5 className="signup-input-tag">CREATE PASSWORD</h5>
                        <input type="password" className="login-input" placeholder="********" />
                    </div>
                </div>
                <div class="form-check ps-4 ms-5 py-2">
                    <input class="form-check-input login-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button type="btn" className="signup-but">
                    Sign in
                </button>
                <p className="agree-text text-center pt-4">
                    Forgot
                    <Link to="/forget-pass" className="link-login">
                       
                        Password?
                    </Link>
                </p>
                <p className="agree-text text-center ">
                    Don’t have an account?
                    <Link to="/sign-up" className="link-login">
                        Create an account
                    </Link>
                </p>
            </div>
            <div className="login-side">
                <img className="login-side-image" src={loginSide} alt="sideimage" />
            </div>
        </div>
    );
};

export default index;
