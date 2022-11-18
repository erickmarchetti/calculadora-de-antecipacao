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
  type: string
  modalInput?: boolean
}

const Input = ({
  label,
  register,
  registerName,
  errors,
  placeholder,
  type,
  modalInput
}: InputProps) => {
  const modalErrors = Array.isArray(errors?.days)
    ? errors.days.reduce(
        (acc, item) => (item?.message ? (acc += item.message) : acc),
        ""
      )
    : "Deve ser uma lista de números envoltos por colchetes ([])"

  const normalErrors = errors[registerName]?.message?.includes("NaN")
    ? "Campo obrigatório"
    : errors[registerName]?.message

  return (
    <StyledInput hasError={!!errors[registerName]}>
      <span>{label}</span>

      <input
        type={type}
        placeholder={placeholder}
        {...register(registerName)}
      />

      {errors[registerName] && (
        <span className="containerInput__span--error">
          {modalInput ? modalErrors : normalErrors}
        </span>
      )}
    </StyledInput>
  )
}

export default Input
