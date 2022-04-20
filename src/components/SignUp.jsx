import React from 'react'
import google from '../assets/images/google.png'
import facebook from '../assets/images/facebook.png'
import line from '../assets/images/line.svg'

const SignUp = () => {
  return (
    <>
      <main className='singup'>
        <div className="title">
          <h1>Get Started With MAKER</h1>
          <p className="title__paragraph">Getting started is easy</p>
        </div>
        <div className="button-social">
          <button className="google">
            <img src={google} alt="logo google" />
            Google
          </button>
          <button className="facebook">
            <img src={facebook} alt="logo facebook" />
            Facebook
          </button>
        </div>
        <div className="separator">
          <img src={line} alt="" />
          <p>Or continue with</p>
          <img src={line} alt="" />
        </div>
        <form className='form'>
          <div className="form__inputs">
            <input type="text" placeholder='Full name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='Confirm Password'/>
          </div>
          <input type="submit" name="" id="" value="Create Account" />
        </form>
        <p className='comment'>By continuing you indicate that you read and agreed to the Terms of Use</p>
      </main>
    </>
  )
}

export default SignUp