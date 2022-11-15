import List from "../List"
import { StyledRightContainer } from "./style"

const RightContainer = () => (
  <StyledRightContainer>
    <h2>Você receberá:</h2>
    <div className="rightContainer__div--divider"></div>
    <List />
  </StyledRightContainer>
)

export default RightContainer
