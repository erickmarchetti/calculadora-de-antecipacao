import styled from "styled-components"
import Container from "./components/Container"

const StyledApp = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <StyledApp>
      <Container />
    </StyledApp>
  )
}

export default App
