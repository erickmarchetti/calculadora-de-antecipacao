import { createContext, ReactNode, useContext, useState } from "react"
import {
  CalculatorResultDefault,
  CalculatorPostData
} from "../../interfaces/index"
import api from "../../api/index"

interface CalculatorContextProps {
  calculatorResult: CalculatorResultDefault | null
  calculatorPost: (data: CalculatorPostData) => void
}

interface CalculatorProviderProps {
  children: ReactNode
}

export const CalculatorContext = createContext<CalculatorContextProps | null>(
  null
)

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const [calculatorResult, setCalculatorResult] =
    useState<CalculatorResultDefault | null>(null)

  const calculatorPost = (data: CalculatorPostData) => {
    api
      .post("", data)
      .then((res) => setCalculatorResult(res.data))
      .catch((err) => {
        console.log(err)
        setCalculatorResult(null)
      })
  }

  return (
    <CalculatorContext.Provider value={{ calculatorResult, calculatorPost }}>
      {children}
    </CalculatorContext.Provider>
  )
}

const useCalculatorContext = () => useContext(CalculatorContext)

export default useCalculatorContext
