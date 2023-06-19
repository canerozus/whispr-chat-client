"use client";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { fetchLogin } from "../store/authSlice";
import { useAppDispatch } from "../store/store";
import { useRouter } from "next/navigation";

export interface UserInfo {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [userInformation, setUserInformation] = useState<UserInfo>({
    username: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInformation((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchLogin(userInformation)).then((result) => {
      if (result.payload === "logging in") {
        router.push("/")
      } else {
        return <p>{result.payload}</p>
      }
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="username"
              value={userInformation.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md shadow-md focus:outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userInformation.password}
              onChange={handleChange}
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
            <Link
              href={"/register"}
              className="text-blue-500 hover:text-blue-800"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
