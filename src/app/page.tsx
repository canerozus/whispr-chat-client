"use client";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = true;

  if (!isLoggedIn) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row flex-grow">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}
