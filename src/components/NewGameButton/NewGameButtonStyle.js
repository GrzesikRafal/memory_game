import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NewGameButton = styled(motion(Link))`
display:inline-block;
width:80%;
text-align:center;
padding:.5rem 1rem;
margin:0 3rem;
border-radius:15px;
font-weight:900;
color:${props => props.$themeContext.active};
background:${props => props.$themeContext.success};
`