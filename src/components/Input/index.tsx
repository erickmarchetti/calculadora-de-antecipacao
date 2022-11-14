import { StyledInput } from "./style"
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form"
import { CalculatorFormInput } from "../../interfaces"

interface InputProps {
  label: string
  register: UseFormRegister<CalculatorFormInput>
  registerName: "amount" | "installments" | "mdr" | "days"
  errors: Partial<FieldErrorsImpl<CalculatorFormInput>>
}

const Input = ({ label, register, registerName, errors }: InputProps) => {
  return (
    <StyledInput>
      <span>{label}</span>
      <input type="number" {...register(registerName)} />
      {errors[registerName]?.message && (
        <span>
          {errors[registerName]?.message?.includes("NaN")
            ? "Campo obrigatório"
            : errors[registerName]?.message}
        </span>
      )}
    </StyledInput>
  )
}

export default Input
