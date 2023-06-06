import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md shadow-md focus:outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md shadow-md focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md shadow-md focus:outline-none"
            >
              Sign In
            </button>
            <a href="#" className="text-blue-700 hover:text-blue-800">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login