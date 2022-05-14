import { sideImage, vector, logo } from 'Assets';
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className="flex-signup">
            <div className="sign-up-side">
                <img className="sign-up-side-image" src={sideImage} alt="sideimage" />
            </div>
            <div className="signup-data-side">
                <div className="top-signup">
                    <img className="pt-3" src={logo} alt="logo" />
                    <h2 className="heading pt-3">Get Started with Krateen</h2>
                </div>
                <div className="data-signup">
                    <div className="input-group-signup">
                        <h5 className="signup-input-tag">FIRST NAME</h5>
                        <input type="text" className="signup-input" placeholder="Examples: John" />
                    </div>
                    <div className="input-group-signup">
                        <h5 className="signup-input-tag">LAST NAME</h5>
                        <input type="text" className="signup-input" placeholder="Examples: Doe" />
                    </div>

                    <div className="input-group-signup">
                        <h5 className="signup-input-tag">EMAIL ADDRESS</h5>
                        <input type="email" className="signup-input" placeholder="Examples: example@gmail.com" />
                    </div>
                    <div className="input-group-signup">
                        <h5 className="signup-input-tag">PHONE NUMBER</h5>
                        <input type="email" className="signup-input" placeholder="Examples: +123456789" />
                    </div>
                    <div className="input-group-signup">
                        <h5 className="signup-input-tag">CREATE PASSWORD</h5>
                        <input type="password" className="signup-input" />
                    </div>
                </div>
                <div className="agree-div">
                    <img src={vector} alt="vector" />
                    <img src={vector} alt="vector" />
                    <img src={vector} alt="vector" />
                    <p className="agree-text">&nbsp;By clicking the Continue button, I agree to all terms of service.</p>
                </div>
                <button type="btn" className="signup-but">
                    Continue
                </button>
                <p className="agree-text text-center pt-4">
                    Already have an account?
                    <Link to="/login" className="link-login">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Index;
