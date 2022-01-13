import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewGameButton = styled(Link)`
  display: inline-block;
  width: 80%;
  text-align: center;
  padding: 0.5rem 1rem;
  margin: 0 3rem;
  border-radius: 15px;
  font-size: ${(props) => (props.$bigFont ? " 1.5rem" : "1rem")};
  font-weight: 900;
  color: ${(props) => props.$themeContext.active};
  background: ${(props) => props.$themeContext.success};
  transition: transform 0.5s;
  :hover, :focus {
    transform: scale(1.1);
  }
`;
