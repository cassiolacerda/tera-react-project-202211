import React from "react";
import { Link } from "react-router-dom";

export default function UserListItem(props) {
  return (
    <Link to={`/users/${props.id}`} className="users__list-item">
      <div className="users__list-item-photo">
        <img src={props.avatar} className="responsive avatar" alt="" />
      </div>
      <div className="users__list-item-name">
        {props.fn} {props.ln}
      </div>
    </Link>
  );
}
