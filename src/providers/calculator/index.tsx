import { createContext, ReactNode, useContext, useState } from "react"
import {
  CalculatorResultDefault,
  CalculatorPostData
} from "../../interfaces/index"

import api from "../../api/index"

import { toast } from "react-toastify"

// props que serão enviadas no context
interface CalculatorContextProps {
  calculatorResult: CalculatorResultDefault
  calculatorPost: (data: CalculatorPostData) => void
}

// tipagem padrão de um children
interface CalculatorProviderProps {
  children: ReactNode
}

// valor inicial do state, também é usado quando a requisição falha
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
  // guarda a resposta da requisição
  const [calculatorResult, setCalculatorResult] =
    useState<CalculatorResultDefault>(initialValue)

  // função que faz a requisição, todas as funções de toast são para notificar o usuário dos processos
  const calculatorPost = (data: CalculatorPostData) => {
    toast.promise(
      api
        .post("", data)
        .then((res) => {
          setCalculatorResult(res.data)
          toast.success("Cálculo feito!", { delay: 500 })
        })
        .catch((err) => {
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

// usa o contexto e o retorna, diminui a quantidade de imports no código
const useCalculatorContext = () => useContext(CalculatorContext)

export default useCalculatorContext
