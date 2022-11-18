import styled from "styled-components"

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: var(--background-modal);
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal__div--content {
    width: 100%;
    max-width: 400px;
    height: fit-content;
    border: 1px solid var(--container-border);
    border-radius: 4px;
    padding: 10px 27px 20px 27px;

    background-color: white;

    display: flex;
    flex-flow: column nowrap;

    position: relative;

    header {
      width: 100%;
      display: flex;
      /* justify-content: space-between; */
      /* align-items: center; */

      h3 {
        font-size: 23px;
        font-weight: bold;
        width: fit-content;
        color: var(--title-list);
      }
    }
  }
  .modal__button--close {
    position: absolute;
    right: 5px;
    top: 5px;

    display: flex;
    height: min-content;
    background-color: transparent;
  }
  .modal__div--divider {
    height: 2px;
    width: 100%;
    opacity: 30%;
    margin: 5px 0 15px 0;

    background-color: var(--text-list);
  }
  .modal__button--ok {
    padding: 5px 10px 5px 10px;
    border-radius: 4px;
    margin-top: 10px;

    background-color: var(--text-list);
  }
`
