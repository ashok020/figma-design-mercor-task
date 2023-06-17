import React from "react";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";
import { ReactComponent as FaqIcon } from "../icons/faq.svg";
import { ReactComponent as BellIcon } from "../icons/bell.svg";
import { ReactComponent as DropdownIcon } from "../icons/dropdown.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-grow flex-row-between">
        <div className="input-container flex-row-center">
          <SearchIcon className="icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for anything..."
          />
        </div>
        <div className="icons-group flex-row-center">
          <CalendarIcon className="icon" />
          <FaqIcon className="icon" />
          <BellIcon className="icon" />
        </div>
      </div>
      <div className="user-info-container flex-row-center">
        <div className="user-info">
          <p className="text-heading text-sz-med text-fw-400">Anima Agrawal</p>
          <p>U.P, India</p>
        </div>
        <div className="user-image"></div>
        <DropdownIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
