import {
  BoletoValidator,
  CalculateDate,
  CalculateAmount,
  DigitVerification,
  Module10,
  ConvertToBarCode
} from '../../operations/boleto-validator'

export const makeBoletoValidator = (): BoletoValidator => {
  return new BoletoValidator(
    new CalculateDate(),
    new CalculateAmount(),
    new DigitVerification(new Module10()),
    new ConvertToBarCode()
  )
}
