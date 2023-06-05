import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row flex-grow">
        <SideBar/>
         <Chat/>
      </div>
    </div>
  );
}
