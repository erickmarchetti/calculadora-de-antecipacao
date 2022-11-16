import { StyledList } from "./style"
import useCalculatorContext from "../../providers/calculator"

const List = () => {
  const { calculatorResult } = useCalculatorContext()

  return (
    <StyledList>
      {Object.entries(calculatorResult).map(([key, value], index) => (
        <li key={index}>
          <span>{key === "1" ? `Amanhã: ` : `Em ${key} dias: `}</span>

          <span className="rightContainer__span--money">
            {(value / 100).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL"
            })}
          </span>
        </li>
      ))}
    </StyledList>
  )
}

export default List
