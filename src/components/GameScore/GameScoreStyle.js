import styled from 'styled-components'

export const ScoresParent = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
gap:1rem;

@media(min-width:576px){
   flex-direction:row;
}
`
export const ScoreContainer = styled.div`
display:flex;
justify-content:space-between;
gap:4rem;
padding:1rem;
border-radius:15px;
font-weight:bold;
overflow:hidden;
color:${props => props.$themeContext.inactive};
background:${props => props.$themeContext.active};
box-shadow: ${props => props.$themeContext.active} 0px 20px 30px -10px;
`
export const Value = styled.div`
font-size:1rem;
font-family:monospace;
color:${props => props.$themeContext.success};
`