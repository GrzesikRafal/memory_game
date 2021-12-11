import styled from "styled-components";

export const GridContainer = styled.div`
display:grid;
grid-template-columns:repeat(${props => props.$gridSize},1fr);
gap:${props => props.$gridSize === 4 ? '1rem' : '.4rem'};
margin-bottom:${props => props.$gridSize === 4 ? '3rem' : '.5rem'};

@media(min-width:576px){
gap:${props => props.$gridSize === 4 ? '1.5rem' : '.5rem'};
margin-bottom:1.5rem;
}
@media(min-width:768px){
    gap:1.5rem;
margin-bottom:3rem;
}

`
export const Navigation = styled.nav`
display:flex;
justify-content:space-between;
`

