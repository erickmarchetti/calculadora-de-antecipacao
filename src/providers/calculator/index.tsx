import { createContext, ReactNode, useContext, useState } from "react"
import {
  CalculatorResultDefault,
  CalculatorPostData
} from "../../interfaces/index"

import api from "../../api/index"

import { toast } from "react-toastify"

interface CalculatorContextProps {
  calculatorResult: CalculatorResultDefault
  calculatorPost: (data: CalculatorPostData) => void
}

interface CalculatorProviderProps {
  children: ReactNode
}

const initialValue = {
  1: 0,
  15: 0,
  30: 0,
  90: 0
}

export const CalculatorContext = createContext<CalculatorContextProps>(
  {} as CalculatorContextProps
)

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const [calculatorResult, setCalculatorResult] =
    useState<CalculatorResultDefault>(initialValue)

  const calculatorPost = (data: CalculatorPostData) => {
    toast.promise(
      api
        .post("", data)
        .then((res) => {
          console.log(res)
          setCalculatorResult(res.data)
          toast.success("Calculo feito!", { delay: 500 })
        })
        .catch((err) => {
          console.log(err)
          setCalculatorResult(initialValue)
          toast.error(
            `${
              err?.response?.data?.message
                ? "Ocorreu um erro: " +
                  err.response.data?.message +
                  ", verifique a conexão com a internet ou tente novamente mais tarde"
                : "Verifique sua conexão com a internet e tente novamente"
            }`,
            { delay: 500 }
          )
        }),
      { pending: "Carregando..." }
    )
  }

  return (
    <CalculatorContext.Provider value={{ calculatorResult, calculatorPost }}>
      {children}
    </CalculatorContext.Provider>
  )
}

const useCalculatorContext = () => useContext(CalculatorContext)

export default useCalculatorContext
