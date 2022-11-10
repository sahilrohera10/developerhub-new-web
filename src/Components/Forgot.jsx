import { Button } from '@mui/material'
import React from 'react';
import './Forgot.css';
import forgot from '../assets/forgot.jpeg'
import { Link } from 'react-router-dom';
const Forgot = () => {
  return (
    <div>
       <div className="ForgotConatainer container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* Col */}
            <div className="bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                <img src={forgot} style={{width:'100%',height:'100%'}}></img>
            </div>
            {/* Col */}
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below and we'll send you a
                  link to reset your password!
                </p>
              </div>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email Address..." />
                </div>
                <div className="mb-6 text-center">
                <Button variant="contained" fullWidth>Sign In</Button>

                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link to="/form"><a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                    Create an Account!
                  </a></Link>
                </div>
                <div className="text-center">
                  <Link to="/signin"><a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                    Already have an account? Login!
                  </a></Link>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgot
