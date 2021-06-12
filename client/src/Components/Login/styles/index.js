import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 400px;
  height: 400px;
`;
LoginContainer.displayName = "LoginContainer";

export const SubmitButton = styled.button`
  border: none;
  background-color: #0057d8;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 12px 24px;
`;
SubmitButton.displayName = "SubmitButton";
