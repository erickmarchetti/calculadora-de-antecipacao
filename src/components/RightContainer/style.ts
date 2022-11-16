import styled from "styled-components"

export const StyledRightContainer = styled.div`
  height: 100%;
  width: 38%;

  background-color: var(--background-list);

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    width: 69.7%;
    min-width: fit-content;
    max-width: 250px;
    color: var(--title-list);
    margin-bottom: 4px;
  }

  .rightContainer__div--divider {
    width: 69.7%;
    max-width: 250px;
    background-color: var(--text-list);
    height: 2px;
    opacity: 30%;
    margin: 4px 0 30px 0;
  }
`
