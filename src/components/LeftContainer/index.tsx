import { useState } from "react"

import Input from "../Input/index"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { CalculatorFormInput } from "../../interfaces"
import { StyledLeftContainer } from "./style"

const calculatorFormSchema = yup.object({
  amount: yup
    .number()
    .positive("Deve ser positivo")
    .integer("Deve ser inteiro"),
  installments: yup
    .number()
    .positive("Deve ser positivo")
    .integer("Deve ser inteiro")
    .max(12, "Máximo 12 parcelas"),
  mdr: yup.number().positive("Deve ser positivo")
})

const LeftContainer = () => {
  const [lastTimer, setLastTimer] = useState<NodeJS.Timeout | undefined>()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CalculatorFormInput>({
    mode: "onBlur",
    shouldFocusError: false,
    shouldUnregister: false,
    resolver: yupResolver(calculatorFormSchema)
  })

  const onSubmit = (data: CalculatorFormInput) => {
    clearTimeout(lastTimer)

    setLastTimer(setTimeout(() => console.log(data), 1500))
  }

  return (
    <StyledLeftContainer>
      <h1>h1</h1>
      <form onChange={handleSubmit(onSubmit)}>
        <Input
          label="Informe o valor da venda *"
          register={register}
          registerName="amount"
          errors={errors}
        />
        <Input
          label="Em quantas parcelas *"
          register={register}
          registerName="installments"
          errors={errors}
        />
        <Input
          label="Informe o percentual de MDR *"
          register={register}
          registerName="mdr"
          errors={errors}
        />
      </form>
    </StyledLeftContainer>
  )
}

export default LeftContainer
