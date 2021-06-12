import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
UsersContainer.displayName = "UsersContainer";

export const UsersListContainer = styled.ul`
  min-width: 50%;
  border: 1px solid #a7c943;
  padding: 0;
`;
UsersListContainer.displayName = "UsersListContainer";
