import { StyledInput } from "./style"
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form"
import { CalculatorPostData } from "../../interfaces"

// interface que tipa todas as props que o input deve receber
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
  // hasError é uma propriedade que define se a borda do input vai ficar vermelha ou não
  return (
    <StyledInput hasError={!!errors[registerName]?.message}>
      <span>{label}</span>

      <input
        type="number"
        placeholder={placeholder}
        {...register(registerName)}
      />

      {errors[registerName]?.message && ( // Verifica se existe erro na entrada do input
        <span className="containerInput__span--error">
          {errors[registerName]?.message?.includes("NaN")
            ? "Campo obrigatório"
            : errors[registerName]?.message}
        </span>
      )}
    </StyledInput>
  )
}

export default Input
