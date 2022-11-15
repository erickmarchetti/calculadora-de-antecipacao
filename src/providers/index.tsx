import { CalculatorProvider } from "./calculator"
import { ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => (
  <CalculatorProvider>{children}</CalculatorProvider>
)

export default Providers
