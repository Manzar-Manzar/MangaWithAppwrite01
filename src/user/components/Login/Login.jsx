import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { login as authLogin } from "../../../store/authSlice"
import { Button, Input, Logo } from "../index"
import { useDispatch } from 'react-redux';
import authService from '../../../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState("")

  const login = async(data) => {
    setError("")
    try {
        const session = await authService.login(data)
        if (session) {
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(authLogin(userData));
            navigate("/")
        }
    } catch (error) {
        setError(error.message)
    }
}


  return (
    // <div className="bg-gray-800 min-h-screen flex items-center justify-center">
    //   <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
    //     <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div>
    //         <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
    //         <input
    //           type="email"
    //           id="email"
    //           value={data.email}
    //           onChange={(e) => setData({ ...data, email: e.target.value })}
    //           className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
    //         <input
    //           type="password"
    //           id="password"
    //           value={data.password}
    //           onChange={(e) => setData({ ...data, password: e.target.value })}
    //           className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200"
    //           required
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full py-2 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 rounded-lg"
    //       >
    //         Login
    //       </button>
    //     </form>
    //     <p className="mt-4 text-center text-gray-400">
    //       Don't have an account? <a href="/getStarted" className="text-blue-400 hover:underline">Sign Up</a>
    //     </p>
    //   </div>
    // </div>
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  );
}

export default Login;
