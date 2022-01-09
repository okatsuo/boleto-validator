import {
  BoletoBancario,
  CalculateDate,
  CalculateAmount,
  DigitVerification,
  Module10,
  ConvertToBarCode
} from '../../operations/boleto-bancario'

export const makeBoletoValidator = (): BoletoBancario => {
  return new BoletoBancario(
    new CalculateDate(),
    new CalculateAmount(),
    new DigitVerification(new Module10()),
    new ConvertToBarCode()
  )
}
