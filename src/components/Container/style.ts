import styled from "styled-components"

export const StyledContainer = styled.div`
  width: 100%;
  height: 389px;
  max-width: 608px;

  display: flex;

  border: 1px solid var(--container-border);
  border-radius: 4px;

  @media (max-width: 500px) {
    flex-flow: column nowrap;
    height: fit-content;

    & > div {
      width: 100%;
      padding: 20px 0 20px 0;
    }
  }
`
