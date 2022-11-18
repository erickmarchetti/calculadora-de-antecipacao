import styled from "styled-components"

export const StyledRightContainer = styled.div`
  height: 100%;
  width: 38%;

  background-color: var(--background-list);

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .rightContainer__header {
    width: 69.7%;
    max-width: 250px;
    margin-bottom: 4px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    width: fit-content;
    color: var(--title-list);
  }

  .rightContainer__button--gear {
    display: flex;
    height: fit-content;

    border: 1px solid var(--title-list);
    border-radius: 4px;
    padding: 2px;
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
