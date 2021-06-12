import styled from "styled-components";

export const UsersListItem = styled.li`
  display: flex;
  align-items: center;
  color: #000;

  &.user-list__header-item {
    background-color: #a7c943;
    color: #fff;
  }

  &:nth-child(2n + 3) {
    background-color: #eaf3d3;
  }

  & > span {
    display: flex;
    width: 30%;
    border: 1px solid #a7c943;
    padding: 12px;

    &.user__email {
      width: 40%;
    }
  }
`;
UsersListItem.displayName = "UsersListItem";

export const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  padding: 24px;
  border: 1px solid #333;
  width: 300px;

  h1 {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;
EmployeeContainer.displayName = "EmployeeContainer";

export const EmployeeListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;
EmployeeListItem.displayName = "EmployeeListItem";
