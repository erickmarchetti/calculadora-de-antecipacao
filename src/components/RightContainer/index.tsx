import List from "../List"
import Modal from "../Modal"
import { StyledRightContainer } from "./style"
import { VscSettingsGear } from "react-icons/vsc"
import { useState } from "react"

const RightContainer = () => {
  // boleano que regula se modal está aberto ou não
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <StyledRightContainer>
      <header className="rightContainer__header">
        <h2>Você receberá:</h2>
        <button
          className="rightContainer__button--gear"
          onClick={() => setIsOpen(true)}
        >
          <VscSettingsGear color="var(--text-list)" opacity="60%" />
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </header>
      <div className="rightContainer__div--divider"></div>
      <List />
    </StyledRightContainer>
  )
}

export default RightContainer
