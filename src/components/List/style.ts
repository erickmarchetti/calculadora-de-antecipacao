import styled from "styled-components"

export const StyledList = styled.ul`
  width: 69.7%;
  min-width: fit-content;
  max-width: 250px;
  max-height: 177px;
  overflow-y: scroll;

  display: flex;
  flex-flow: column nowrap;
  gap: 32px;

  color: var(--text-list);

  &::-webkit-scrollbar {
    display: none;
  }

  .rightContainer__span--money {
    font-weight: bold;
  }
`
