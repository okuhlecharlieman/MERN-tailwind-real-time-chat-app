import React from "react";
import InputTest from "./inputTest";

function sidebar() {
  return (
    <div>
      <div className="flex w-full justify-center gap-1 m-6">
        <div className="card w-80 items-center justify-center">Default</div>
        <div className="divider divider-vertical mx-0 h-44"></div>
        <div className="card max-w-full items-center justify-center">
          <InputTest />
        </div>
      </div>
    </div>
  );
}

export default sidebar;
