import styled from "styled-components";

export const Button = styled.a`
  align-items: center;
  background: ${(props) => props.theme.colors.c1}; 
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  font-size: 16px; 
  height: 64px;
  justify-content: center;
  text-decoration: none;
  transition: ease 0.2s;
  width: 100%;
  max-width: 294px;
  &:hover {
    transform: scale(1.02);
    background: ${(props) => props.theme.colors.c2};
  }
`;