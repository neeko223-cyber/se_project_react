import "./SideBar.css";
import { useContext } from "react";
import avatar from "../../assets/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ onSignOut, onEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        {currentUser?.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="sidebar__avatar"
          />
        ) : (
          <img src={avatar} alt="User avatar" className="sidebar__avatar" />
        )}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <button
        type="button"
        className="sidebar__edit-button"
        onClick={onEditProfileClick}
      >
        Change profile data
      </button>
      <button
        type="button"
        className="sidebar__signout-button"
        onClick={onSignOut}
      >
        Sign out
      </button>
    </aside>
  );
}
