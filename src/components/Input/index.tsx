import { StyledInput } from "./style"
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form"
import { CalculatorPostData } from "../../interfaces"

interface InputProps {
  label: string
  register: UseFormRegister<CalculatorPostData>
  registerName: "amount" | "installments" | "mdr" | "days"
  errors: Partial<FieldErrorsImpl<CalculatorPostData>>
  placeholder: string
}

const Input = ({
  label,
  register,
  registerName,
  errors,
  placeholder
}: InputProps) => {
  return (
    <StyledInput>
      <span>{label}</span>
      <input
        type="number"
        placeholder={placeholder}
        {...register(registerName)}
      />
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
