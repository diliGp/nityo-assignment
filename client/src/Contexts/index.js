import React from "react";

export const AppContext = React.createContext({
  users: null,
  currentUser: null,
  history: {},

  setUsers: () => "",
  setCurrentUser: () => "",
});
