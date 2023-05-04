import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const Login = () => {
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const {loginUser}=useContext(AuthContext)
const handleLogin=(e)=>{
e.preventDefault()
const form=e.target
const email=form.email.value 
const password=form.password.value
e.target.reset()
loginUser(email,password)
.then((result)=>{
  console.log(result.user);
  setError('')
  setSuccess('Successfully Login!')
toast.success('Successfully Login!')
})
.catch(error=>{
  console.log(error);
  setSuccess('')
  setError(error.message.slice(9,-1))
  
})
}
    return (
        <div className='bg-gray-800 pb-40 pt-56 justify-center flex md:pt-20'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <p className='text-red-400 italic'>{error}</p>
          <p className='text-green-500 italic'>{success}</p>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <Link className='text-sm link-hover text-pink-500' to="/register">New to Bengal CheFy? <span className=' '>Please Register</span></Link>

        <div className='flex flex-col gap-2'>
        <button className="btn w-full btn-outline btn-info">Login With Google</button>
      <button className="btn w-full btn-outline">Login With Github</button>
      </div>
      </form>

      
    </div>
    <ToastContainer></ToastContainer>
        </div>
    )
};

export default Login;