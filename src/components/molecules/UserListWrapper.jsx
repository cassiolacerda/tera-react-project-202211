import React from "react";

import UserListItem from "./UserListItem";

export default function UserListWrapper(props) {
  return (
    <div className="users__list">
      {props.users
        .sort((a, b) => a.fn.localeCompare(b.fn))
        .map((user) => (
          <UserListItem
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            fn={user.fn}
            ln={user.ln}
          />
        ))}
    </div>
  );
}
