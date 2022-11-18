import { StyledModal } from "./style"
import Input from "../Input"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { CalculatorPostData } from "../../interfaces"
import useCalculatorContext from "../../providers/calculator"
import { VscChromeClose } from "react-icons/vsc"
import { toast } from "react-toastify"

interface modalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const modalSchema = yup.object({
  days: yup.array(
    yup
      .number()
      .positive("Devem ser números positivos")
      .integer("Devem ser números inteiros")
      .max(90, "Máximo 90 dias")
  )
})

const Modal = ({ setIsOpen }: modalProps) => {
  const { setDays } = useCalculatorContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CalculatorPostData>({
    resolver: yupResolver(modalSchema)
  })

  const onSubmit = (data: CalculatorPostData) => {
    data?.days && setDays(data.days)
    setIsOpen(false)
    toast.success("Tudo certo!")
  }

  return (
    <StyledModal>
      <div className="modal__div--content">
        <header className="">
          <h3>Dias para a antecipação</h3>
          <button
            className="modal__button--close"
            onClick={(e) => setIsOpen(false)}
          >
            <VscChromeClose />
          </button>
        </header>
        <div className="modal__div--divider"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Informe os dias para a antecipação"
            placeholder="Ex: [1, 10, 20, 30]"
            register={register}
            registerName="days"
            errors={errors}
            type="text"
            modalInput={true}
          />
          <button type="submit" className="modal__button--ok">
            Ok
          </button>
        </form>
      </div>
    </StyledModal>
  )
}

export default Modal
