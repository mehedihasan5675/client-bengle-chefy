import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='bg-gray-800 pb-40 pt-56 justify-center flex md:pt-20'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <Link className='text-sm link-hover text-pink-500' to="/register">New to Bengal CheFy? <span className=' '>Please Register</span></Link>
      </form>
    </div>
        </div>
    )
};

export default Login;