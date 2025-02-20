import React from 'react';
import { Link } from 'react-router-dom'




export default function Signup() {


  return (
    <div className='bg-base-200'>
    
    <div className="flex flex-col  justify-center pt-10 pb-14 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">


      </div>

      <div className="mt-8 sm:mx-auto bg-base-100 sm:w-full sm:max-w-md">
        <div className="bg-layer-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h1 className="text-center  text-3xl font-semibold text-heading">
            Join Us
          </h1>

          <p className="mb-4 mt-2 text-center text-sm text-text">
          Already have account?{" "}
          <Link
            to="/login"
            className="font-semibold text-orange-400 hover:text-primary-accent"
          >
            Login
          </Link>
        </p>

          <form className="mt-6 flex flex-col space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-heading"
              >
                Email or Phone
              </label>
              <input
                id="email"
                placeholder="Type your email or phone no."
                name="email"
                type=""
                className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-orange-500 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-heading"
              >
                Password
              </label>
              <input
                id="password"
                placeholder="Type password"
                name="password"
                type="password"
                className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-orange-500 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-heading"
              >
               Confirm password
              </label>
              <input
                id="confirm password"
                placeholder="Type password again"
                name=" confirm password"
                type="password"
                className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-orange-500 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="flex justify-end">
          
            </div>

            <Link
              to = "/confirm-otp"
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-orange-500 bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
            >
              Get OTP
            </Link>

            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 text-sm font-semibold  text-text shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80"
            >
              <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5">
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </div>

    </div>
  );
}