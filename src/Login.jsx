import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Login = () => {
const {signInUser,signIWithGoogle}=useContext(AuthContext)
const navigate = useNavigate()
  const handleLogin = (e) => {
    
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
    signInUser(email,password)
    .then(result=>{
        console.log(result.user);
        e.target.reset()
        navigate('/')
    }).catch(error=>{
        error.message,'error found'
    })
  };


  const handleSignInWithGoogle = ()=>{
    signIWithGoogle()
    .then(result=>{
      console.log(result.user);
      navigate('/')
    }).catch(error=>{
      console.log(error.message);
      console.log(result.user);
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="m-4">New to this website? please <Link to='/register' className="bg-base-300 p-2 rounded-lg">Register</Link></p>

          <p>
            <button onClick={handleSignInWithGoogle} className="btn btn-accent">Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
<h2>Login</h2>;
