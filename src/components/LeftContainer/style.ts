import styled from "styled-components"

export const StyledLeftContainer = styled.div`
  height: 100%;
  width: 62%;
  padding: 0 0 0 56px;
  background-color: white;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 22px;

  h1 {
    font-size: 24.6px;
    color: var(--text-default);
    width: fit-content;
    font-weight: 700;
  }

  form {
    width: 100%;
    max-width: 250px;

    display: flex;
    flex-flow: column nowrap;
    gap: 26px;
  }
`
