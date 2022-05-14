import React from 'react';
import { logo, forgetPass } from 'Assets';
import { useForm, Controller } from 'react-hook-form';

const ForgetPass = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log('calling fn!', data);
        // loginAuth(data);
    };
    return (
        <div className="flex-signup">
            <div className="login-data-side ps-4">
                <div className="top-signup">
                    <img className="pt-3" src={logo} alt="logo" />
                    <h2 className="heading pt-5 mt-5">Enter Your Email address</h2>
                    <h5 className="signup-input-tag">Check your mail to get Reset</h5>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="data-reset">
                        <div className="input-group-login">
                            <h5 className="signup-input-tag">EMAIL ADDRESS</h5>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: 'This field is required!',
                                    pattern: {
                                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Please enter a valid email address! '
                                    }
                                }}
                                render={({ field }) => <input {...field} type="text" className="login-input" placeholder="Examples: example@gmail.com" />}
                            />
                            <p className="error">{errors?.email?.message}</p>
                            {/* <input type="email" className="login-input" placeholder="Examples: example@gmail.com" /> */}
                        </div>
                    </div>
                    <button type="submit" className="reset-but text-center">
                        Sign in
                    </button>
                </form>
            </div>
            <div className="login-side">
                <img className="login-side-image" src={forgetPass} alt="sideimage" />
            </div>
        </div>
    );
};

export default ForgetPass;
