import {
  BoletoBancario,
  CalculateDate,
  CalculateAmount,
  DigitVerification,
  ConvertToBarCode
} from '../../operations/boleto-bancario'
import { Module10 } from '../../operations/shared'

export const makeBoletoValidator = (): BoletoBancario => {
  return new BoletoBancario(
    new CalculateDate(),
    new CalculateAmount(),
    new DigitVerification(new Module10()),
    new ConvertToBarCode()
  )
}
