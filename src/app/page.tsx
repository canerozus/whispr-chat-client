import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row">
        <SideBar />
         {/* <Chat/> */}
      </div>
    </div>
  );
}
