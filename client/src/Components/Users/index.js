import React, { useEffect, useContext } from "react";
import axios from "axios";
import { API_URL, API_ROUTES, USER_ROLES } from "../../Constants/common";
import { AppContext } from "../../Contexts";
import Employee from "../User/Employee";
import Admin from "../User/Admin";
import { UsersListContainer, UsersContainer } from "./styles";
import { UsersListItem } from "../User/styles";

const Users = () => {
  const appContext = useContext(AppContext);
  useEffect(() => {
    if (appContext.currentUser.data.role === USER_ROLES.admin) {
      _getAllUsers();
    }
  }, []);

  /**
   * Fetch all users from backend.
   */
  const _getAllUsers = async () => {
    try {
      const url = API_URL + API_ROUTES.users;
      const response = await axios.get(url, {
        headers: {
          authorization: `Bearer ${appContext.currentUser.accessToken}`,
        },
      });
      appContext.setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UsersContainer>
      {appContext.currentUser.data.role === USER_ROLES.employee ? (
        <Employee user={appContext.currentUser.data} />
      ) : (
        <UsersListContainer>
          <UsersListItem className="user-list__header-item">
            <span className="user__name">Name</span>
            <span className="user__email">Email</span>
            <span className="user__role">Role</span>
          </UsersListItem>
          {appContext?.users?.map((user) => (
            <Admin key={user.id} user={user} />
          ))}
        </UsersListContainer>
      )}
    </UsersContainer>
  );
};

export default Users;
