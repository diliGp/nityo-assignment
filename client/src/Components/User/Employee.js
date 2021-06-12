import React from "react";
import { EmployeeContainer, EmployeeListItem } from "./styles";

const Employee = ({ user }) => {
  return (
    <EmployeeContainer>
      <h1>Profile</h1>
      <EmployeeListItem>
        <label>Name:</label>
        <span>{user.name}</span>
      </EmployeeListItem>
      <EmployeeListItem>
        <label>Email:</label>
        <span>{user.email}</span>
      </EmployeeListItem>
      <EmployeeListItem>
        <label>Role:</label>
        <span>{user.role}</span>
      </EmployeeListItem>
    </EmployeeContainer>
  );
};

export default Employee;
