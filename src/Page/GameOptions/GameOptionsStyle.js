import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
export const OptionsContainer = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 15px;
  overflow:hidden;
  @media (min-width: 576px) {
    padding: 4rem;
  }

  @media(min-width:768px){
    padding: 8rem;
  }
`;
export const RowTitle = styled(motion.h2)`
margin: 2rem 0;
font-weight:600;
`;
export const Button = styled(motion(Link))`
  display: block;
  margin: 2rem 0;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 25px;
  font-weight:bold;
  cursor: pointer;
  text-decoration: none;
  background: ${(props) => props.$theme.success};
  color: ${(props) => props.$theme.fontColor};
  transition:box-shadow .3s;
    :hover{
      box-shadow: ${(props) => props.$theme.success} 0px 10px 36px 0px, ${(props) => props.$theme.success} 0px 0px 0px 1px;
    }
  @media(min-width:768px){
    padding:1rem 2rem;
  }
`;
export const AbsoluteThemeButton = styled.div`
position:absolute;
top:10%;
right:10%;
`
export const GameOptionsRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;

  label {
    width: 100%;
  }

  @media (min-width: 768px) {
   gap:4rem;
  }
`;
