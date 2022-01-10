import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Logo = styled(Link)`
position:relative;
font-weight:900;
font-size:2rem;
color:black;
&:after{
    position: absolute;
    content:"";
    bottom: -.5rem;
    left:-5%;
    right:5%;
    height: 1rem;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg');
    z-index: -1;
    background-repeat: no-repeat;
}
`

export const Navigation = styled.nav`
display:flex;
position:relative;
justify-content:space-between;
gap:2.5rem;
margin:2rem;

@media(min-width:567px){
    gap:12rem;
    margin:3rem;
}
@media(min-width:768px){
    gap:20rem;
  
}
`
export const AbsoluteThemeButtonContainer = styled.div`
position: absolute;
right:0;
`

