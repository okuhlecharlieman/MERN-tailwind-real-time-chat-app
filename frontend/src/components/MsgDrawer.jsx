import React from "react";

function MsgDrawer() {
  return (
    <div>
      <input type="checkbox" id="drawer-right-Msg" className="drawer-toggle" />

      <label htmlFor="drawer-right-Msg" className="">
        <img
          width="10px"
          height="10px"
          src="https://img.icons8.com/3d-fluency/94/chat-message.png"
          alt="chat-message"
        />
      </label>
      <label className="overlay" htmlFor="drawer-right-Msg"></label>
      <div className="drawer drawer-right">
        <div className="drawer-content pt-10 flex flex-col h-full">
          <label
            htmlFor="drawer-right-Msg"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h2 className="text-xl font-medium">Chat</h2>
            <input className="input py-1.5 my-3" placeholder="Type here..." />
          </div>
          <div className="h-full flex flex-row justify-end items-end gap-2">
            <button className="btn btn-ghost">...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MsgDrawer;
