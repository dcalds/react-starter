import styled from "styled-components";

export const Button = styled.a`
  align-items: center;
  background: ${(props) => props.theme.colors.c1};
  border-radius: 0.8rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  height: 4.5rem;
  justify-content: center;
  text-decoration: none;
  transition: ease 0.2s;
  width: 100%;
  &:hover {
    transform: scale(1.02);
    background: ${(props) => props.theme.colors.c2};
  }
`;