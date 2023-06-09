"use client";
import React, { useState, useEffect } from "react";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { useAppDispatch } from "../store/store";
import { fetchLogout } from "../store/authSlice";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  // useEffect(() => {

  // },[])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  const navbarBackground = "bg-blue-600";
  const logoColor = isMobile ? "text-white" : "text-blue-200";
  const searchInputBackground = "bg-blue-500";
  const searchInputPlaceholderColor = isMobile
    ? "placeholder-blue-200"
    : "placeholder-white";
  const logoutIconColor = isMobile ? "text-white" : "text-blue-200";

  const HandleLogout = (e: any) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("user")!);
    dispatch(fetchLogout(token.token));
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
  }

  return (
    <div
      className={`flex items-center justify-between py-4 px-6 ${navbarBackground} h-16  w-full `}
    >
      {isMobile && <div className={`text-2xl font-bold ${logoColor}`}>W</div>}
      {!isMobile && (
        <div className={`text-xl font-bold ${logoColor}`}>Whispr</div>
      )}
      <div className="flex-grow flex items-center justify-center">
        <input
          type="text"
          onSubmit={handleSearch}
          placeholder="Search..."
          className={`text-white rounded-md w-3/4 px-2 py-1 mr-4 focus:outline-none ${searchInputBackground} ${searchInputPlaceholderColor}`}
        />
      </div>

      <FiLogOut
        onClick={HandleLogout}
        className={`text-xl cursor-pointer ${logoutIconColor}`}
      />
    </div>
  );
};

export default Navbar;
