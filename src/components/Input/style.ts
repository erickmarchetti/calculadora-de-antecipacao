import styled from "styled-components"

interface StyledInputProps {
  hasError: boolean
}

export const StyledInput = styled.div<StyledInputProps>`
  display: flex;
  flex-flow: column nowrap;

  input,
  span {
    width: 100%;
  }

  input {
    height: 37px;

    color: black;
    border: 1.5px solid
      ${({ hasError }) =>
        hasError ? "var(--input-error)" : "var(--input-border)"};
    border-radius: 4px;
    padding: 0 0 0 14px;
    margin-bottom: 3px;
    transition: 0.4s;

    &:focus {
      border: 1.5px solid var(--input-focus);
    }

    &i::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: var(--text-default);
    }
  }

  span {
    color: var(--text-default);
    font-size: 15px;
    font-weight: bolder;
    padding-left: 1px;
    margin-bottom: 6px;
  }

  .containerInput__span--error {
    font-size: 13px;
    color: var(--input-error);
    font-weight: 600;
    margin-bottom: 0;
  }
`
