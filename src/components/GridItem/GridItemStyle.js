import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";

const rotateIn = keyframes`
    0%{ transform:rotateY(180deg);}
    100%{ transform:rotateY(0);}
    `;
const rotateOut = keyframes`
    0%{transform:rotateY(0);}
    100%{ transform:rotateY(-180deg);}
    `;
const success = keyframes`
    0%{ transform: scale(1);}
    50%{ transform:scale(1.5);}
    100%{ transform: scale(1);}
    `;
const button = css`
  display: grid;
  place-items: center;
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  color:black;
  user-select: none;
  box-shadow:  ${(props) => props.$themeContext.inactive} 0px 0px 0px 2px;

  @media (min-width: 576px) {
    padding: 1.5rem;
  }
`;
export const ButtonHidden = styled.button`
  ${button}
  animation: ${rotateOut} .2s linear forwards;
  background: ${(props) => props.$themeContext.inactive};
  color: ${(props) => props.$themeContext.inactive};
`;
export const ButtonPending = styled.button`
  ${button}
  cursor:default;
  animation:${rotateIn} .2s linear forwards;
  background: ${(props) => props.$themeContext.success};
  color: ${(props) => props.$themeContext.bg};
`;
export const ButtonSuccess = styled.button`
  ${button}
  animation:${success} .2s linearforwards;
  background: ${(props) => props.$themeContext.active};
  color: white;
  pointer-events: none;
`;