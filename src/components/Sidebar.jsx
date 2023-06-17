import React from "react";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as LeftDoubleDropdownIcon } from "../icons/left-doubledropdown.svg";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as MessageIcon } from "../icons/message.svg";
import { ReactComponent as TaskIcon } from "../icons/tasks.svg";
import { ReactComponent as Users } from "../icons/users.svg";
import { ReactComponent as SettingIcon } from "../icons/setting.svg";
import { ReactComponent as AddIcon } from "../icons/add.svg";
import { ReactComponent as DotHorizontalIcon } from "../icons/dot-horz.svg";
import { ReactComponent as BulbIcon } from "../icons/bulb.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header flex-row-between">
        <div className="sidebar-header-left flex-row">
          <Logo className="icon" />
          <p className=" logo-text text-sz-large text-primary text-fw-600">
            Project M.
          </p>
        </div>
        <LeftDoubleDropdownIcon className="icon" />
      </div>
      <div className="sidebar-content">
        <div className="sidebar-links sidebar-links-border">
          <div className="flex-row">
            <HomeIcon className="icon" />
            <p>Home</p>
          </div>
          <div className="flex-row">
            <MessageIcon className="icon" />
            <p>Messages</p>
          </div>
          <div className="flex-row">
            <TaskIcon className="icon" />
            <p>Tasks</p>
          </div>
          <div className="flex-row">
            <Users className="icon" />
            <p>Members</p>
          </div>
          <div className="flex-row">
            <SettingIcon className="icon" />
            <p>Settings</p>
          </div>
        </div>
        <div className="sidebar-links">
          <div className="flex-row-between">
            <p className="text-sz-small text-fw-600">My Projects</p>
            <AddIcon className="icon" />
          </div>
          <div className="sidebard-links-item flex-row-between active-link">
            <div className="flex-row">
              <div className="dot"></div>
              <p>Mobile App</p>
            </div>
            <DotHorizontalIcon className="icon" />
          </div>
          <div className="sidebard-links-item flex-row-between">
            <div className="flex-row">
              <div className="dot"></div>
              <p>Website Redesign</p>
            </div>
          </div>
          <div className="sidebard-links-item flex-row-between">
            <div className="flex-row">
              <div className="dot"></div>
              <p>Design System</p>
            </div>
          </div>
          <div className="sidebard-links-item flex-row-between">
            <div className="flex-row">
              <div className="dot"></div>
              <p>Wireframes</p>
            </div>
          </div>
        </div>
        <div className="sidebar-links">
          <div className="thoughts-card">
            <div className="icon-container">
              <BulbIcon className="icon" />
            </div>
            <p className="text-primary text-fw-500 ">Thoughts Time</p>
            <p>
              We dont have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <div className="thoughts-card-button">
              <p className="text-primary text-fw-500">Write a message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
