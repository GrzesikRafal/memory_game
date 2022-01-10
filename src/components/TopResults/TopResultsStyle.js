import styled from "styled-components";

export const TopResultsContainer = styled.div `
  position: relative;
  padding: 2rem;
  margin: 0 1rem;
  min-height: 48vh;
  background: #fafafa;
  border-top: 3px solid ${(props) => props.$themeContext.success};
  & div:nth-of-type(2n) {
    background: ${(props) => props.$themeContext.inactive};
  }
  & div:first-of-type {
    margin-bottom: 1rem;
  }
`;
export const ResultContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 1.5rem;
  & :first-child {
    grid-column: 2/3;
  }
  & :nth-child(2) {
    grid-column: 4/5;
  }
  & :nth-child(3) {
    color:green;
    grid-column: 5/6;
    place-self: center;
    background-color: white;
    border-radius: 50%;
  }
  & > p {
    font-family: monospace;
  }
`;

export const Rank = styled.p `
  transform: scale(0.7);
`;
export const ResultsLegend = styled.span `
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.3rem;
  text-align: right;
  font-size: 1.2rem;
  font-weight: 600;
`;
