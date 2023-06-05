import React from "react";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="flex  flex-col p-6 w-1/5 bg-gray-200">
      <h2 className="text-lg font-bold mb-6">Chat List</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 p-2 bg-white rounded-md">
          <img
            src="https://placeimg.com/40/40/people"
            alt="User"
            className="rounded-full w-8 h-8"
          />
          <p className="text-sm font-medium">John Doe</p>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white rounded-md">
          <img
            src="https://placeimg.com/40/40/people"
            alt="User"
            className="rounded-full w-8 h-8"
          />
          <p className="text-sm font-medium">Jane Smith</p>
        </div>
        <div className="flex items-center gap-2 p-2 bg-white rounded-md">
          <img
            src="https://placeimg.com/40/40/people"
            alt="User"
            className="rounded-full w-8 h-8"
          />
          <p className="text-sm font-medium">Mike Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
