import styled from "styled-components";

export const Input = styled.input`
  display: none;

  :not(:checked):hover + span {
    box-shadow: ${(props) => props.$themeContext.active} 0px 10px 36px 0px;
    color: ${(props) => props.$themeContext.active};
  }
  :checked + span {
    background-color: ${(props) => props.$themeContext.active};
  }
  + span {
    display: inline-block;
    text-align: center;
    padding: 0.5rem 1rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 25px;
    color: ${(props) => props.$themeContext.fontColor};
    background-color: ${(props) => props.$themeContext.inactive};
    transition: box-shadow .3s, color .3s;

    @media (min-width: 768px) {
      padding: 1rem 2rem;
    }
  }
`;
