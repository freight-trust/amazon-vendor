import React from "react";

export default function Header({ user, onLogOut }) {
  return (
    <div className="header">
      <div>Amazhack</div>
      <div>
        {user ? (
          <div>
            {user.name} / <button onClick={onLogOut}>Logout</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
