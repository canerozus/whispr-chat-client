"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, useEffect } from "react";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { fetchRegister } from "../store/authSlice";
export interface RegisterInfo {
  email: string;
  username: string;
  password: string;
  createdAt: Date;
}
const Register: React.FC = () => {
  const [register, setRegister] = useState<RegisterInfo>({
    email: "",
    username: "",
    password: "",
    createdAt: new Date(),
  });
  const { loading, error, registerInfo } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if(registerInfo){
      router.push("/login")
    }
  }, [registerInfo]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRegister((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(register)
    dispatch(fetchRegister(register));
  };

  
  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              value={register.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md shadow-md focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
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
              name="email"
              value={register.email}
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
              value={register.password}
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
              Register
            </button>
            <Link href={"/login"} className="text-blue-500 hover:text-blue-800">
              <strong>Login</strong>
            </Link>
          </div>
          {(error as string) && <p>{error as string}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
