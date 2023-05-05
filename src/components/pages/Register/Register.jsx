import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const Register = () => {
  const navigate=useNavigate()
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const {createUser}=useContext(AuthContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const form=e.target
    const name=form.username.value
    const email=form.email.value
    const password=form.password.value
    const photoURL=form.photoURL.value
  console.log(name,email,password,photoURL);
  e.target.reset()
  if(!/(?=.{6,})/.test(password)){
    setError('The password is less than 6 characters!')
    // toast.error(error)
    return
}
    createUser(email,password)
    .then(result=>{
      const registeredUser=result.user
      console.log(registeredUser);
      userUpdate(registeredUser,name,photoURL)
      toast.success("Registered successfully Done!")
      setSuccess('Registered successfully Done!')
      navigate('/')
    })
    .catch(error=>{
      console.log(error);
      setSuccess('')
      setError(error.message)
    })
    
    const userUpdate=(currentUser,name,photoURL)=>{
       updateProfile(currentUser,{
          displayName:name,photoURL:photoURL
      })
      .then(()=>{})
    .catch(error=>{
      console.log(error);
    })
  }
    
  }
    return (
        <div className='bg-gray-800 px-5 pb-40 pt-56 justify-center flex md:pt-20'>
            
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                
      <form onSubmit={handleSubmit} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" name='username'  placeholder="username" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"name='password' placeholder="password" className="input input-bordered" required/>
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photoURL'  placeholder="Photo URL" className="input input-bordered" required/>
        </div>
        <p className='text-red-400 italic'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary " >Register</button>
        </div>
        <Link className='text-sm link-hover text-pink-500' to="/login">Already have an account? <span className=''>Please  Login</span></Link>
      </form>
    </div>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;