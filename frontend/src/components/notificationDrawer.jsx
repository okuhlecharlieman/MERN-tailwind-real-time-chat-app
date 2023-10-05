import React from "react";

function notificationDrawer() {
  return (
    <div>
      <input type="checkbox" id="drawer-right" className="drawer-toggle" />

      <label htmlFor="drawer-right">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color-glass/48/commercial--v1.png"
          alt="commercial--v1"
        />
      </label>
      <label className="overlay" htmlFor="drawer-right"></label>
      <div className="drawer drawer-right">
        <div className="drawer-content pt-10 flex flex-col h-full">
          <label
            htmlFor="drawer-right"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h2 className="text-xl font-medium">Notification</h2>
          </div>
          <div className="h-full flex flex-row justify-end items-end gap-2">
            <button className="btn btn-ghost">Cancel</button>
            <button className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default notificationDrawer;
