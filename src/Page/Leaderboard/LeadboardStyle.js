import styled from "styled-components";

export const LeadboardContainer = styled.div`
  margin-top: 4rem;
  padding-bottom:2rem;
  background: white;
  text-align: center;
  border-radius: 5px;
`;

export const SortOptionsParent = styled.div`
  padding: 1rem 2rem;
  & > fieldset {
    margin: 0 1rem;
  }
`;

export const ScoreLeadboardTitle = styled.h1`
  padding: 2rem 0;
  text-shadow: 2px 4px 2px rgba(150, 150, 150, 0.8);
`;
