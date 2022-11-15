export interface CalculatorFormInput {
  amount: number
  installments: number
  mdr: number
  days?: number[]
}

export interface CalculatorResultDefault {
  1: number
  15: number
  30: number
  90: number
}
