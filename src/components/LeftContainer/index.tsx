import { useState } from "react"

import Input from "../Input/index"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { CalculatorPostData } from "../../interfaces"
import { StyledLeftContainer } from "./style"
import useCalculatorContext from "../../providers/calculator"

const calculatorFormSchema = yup.object({
  amount: yup
    .number()
    .positive("Deve ser positivo")
    .integer("Deve ser inteiro")
    .min(1000, "Deve ser maior ou igual a 1000"),
  installments: yup
    .number()
    .positive("Deve ser positivo")
    .integer("Deve ser inteiro")
    .max(12, "Máximo 12 parcelas"),
  mdr: yup
    .number()
    .positive("Deve ser positivo")
    .max(100, "Deve ser menor ou igual a 100")
})

const LeftContainer = () => {
  const [lastTimer, setLastTimer] = useState<NodeJS.Timeout | undefined>()
  const { calculatorPost } = useCalculatorContext()

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<CalculatorPostData>({
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldFocusError: false,
    shouldUnregister: false,
    resolver: yupResolver(calculatorFormSchema)
  })

  const onSubmit = (data: CalculatorPostData) => {
    clearTimeout(lastTimer)

    setLastTimer(setTimeout(() => calculatorPost(data), 1500))
  }

  watch(() => clearInterval(lastTimer))

  return (
    <StyledLeftContainer>
      <h1>Simule sua Antecipação</h1>
      <form onChange={handleSubmit(onSubmit)}>
        <Input
          label="Informe o valor da venda *"
          placeholder="Ex: R$150 -> 15000"
          register={register}
          registerName="amount"
          errors={errors}
        />
        <Input
          label="Em quantas parcelas *"
          placeholder="Ex: 3"
          register={register}
          registerName="installments"
          errors={errors}
        />
        <Input
          label="Informe o percentual de MDR *"
          placeholder="Ex: 70"
          register={register}
          registerName="mdr"
          errors={errors}
        />
      </form>
    </StyledLeftContainer>
  )
}

export default LeftContainer
