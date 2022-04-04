import React from 'react';
import './Register.css'
import Typewriter from 'typewriter-effect';


const Register = () => {
    return (
        <div>
               <div className='main-from'>
            <form action="" className='form-start'>
                <span className='from-span'></span>
                <span className='from-span'></span>
                <span className='from-span'></span>
                <span className='from-span'></span>

                <div className='login-inner'>
                    <h2 className='login-text'><div className='about'>
                                <div className='autoType'>
                                    <Typewriter

                                        options={{
                                            strings: [
                                                "Please Register",
                                               
                                            ],

                                            autoStart: true,
                                            loop: true,
                                            delay: 100,
                                        }}
                                    />
                                </div>
                               
                            </div></h2>
                    <div className='content-style'>
                        <input type="text" name="" id=""  placeholder='User name' className='user-text' />
                        <input type="text" name="" id=""  placeholder='Email' className='user-text' />
                        <input type="password" name="" id=""  placeholder='password' className='user-text' />
                        <input type="password" name="" id=""  placeholder='Re-password' className='user-text' />
                        <button className='submit-btn'>Submit</button>
                    </div>


                </div>
            </form>
            </div>
        </div>
    );
};

export default Register;