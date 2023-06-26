"use client";
import { useSelector } from "react-redux";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useRouter } from "next/navigation";
import { RootState } from "./store/store";

export default function Home() {
  const router = useRouter();
  const {success} = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <>
    {success?.message ==="logging in" ? 
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row flex-grow">
        <SideBar />
        <Chat />
      </div>
    </div> : router.push("/login")}
    </>
  );
}
