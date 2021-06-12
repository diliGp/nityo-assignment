import React from "react";
import { UsersListItem } from "./styles";

const DetailsList = ({ user }) => {
  return (
    <UsersListItem>
      <span className="user__name">{user.name}</span>
      <span className="user__email">{user.email}</span>
      <span className="user__role">{user.role}</span>
    </UsersListItem>
  );
};

export default DetailsList;
