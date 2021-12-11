import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { css } from 'styled-components'

const button = css`
display:inline-block;
padding:1rem 2rem;
margin-bottom:.5rem;
width:100%;
font-weight:bold;
border-radius:15px;
`
export const Background = styled(motion.div)`
position:absolute;
top:0;
left:0;
width:100vw;
min-height:100vh;
background-color:black;
z-index:2;
`
export const SummaryContainer = styled(motion.div)`
position:absolute;
top:10rem;
margin:0 auto;
padding:1rem 2rem;
overflow:hidden;
background:white;
border-radius:15px;
text-align: center;
z-index:3;
`
export const Title = styled.h3`
font-size:2rem; 
margin-bottom:1rem;
`
export const Description = styled.p`
margin-bottom:2rem;
`
export const ResultParent = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:1rem;
margin-bottom:1rem;
border-radius:15px;
background:${props => props.$themeContext.bgGame};
`
export const Result = styled.p`
font-size:1.3rem;
font-weight:bold;
color:${props => props.$themeContext.active};
`
export const SetupNewGameButton = styled(motion(Link))`
${button};
margin-top:1rem;
color:${props => props.$themeContext.fontColor};
background:${props => props.$themeContext.success};
`
export const RankingButton = styled(motion(Link))`
${button};
color:${props => props.$themeContext.fontColor};
background:${props => props.$themeContext.active};
`