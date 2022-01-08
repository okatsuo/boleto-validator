import { BoletoValidator } from '../../boleto-validator/boleto-validator'
import { CalculateAmount } from '../../boleto-validator/calculate-amount'
import { CalculateDate } from '../../boleto-validator/calculate-digitable-line-date'
import { ConvertToBarCode } from '../../boleto-validator/convert-to-bar-code'
import { DigitVerification } from '../../boleto-validator/digit-verification'
import { Module10 } from '../../boleto-validator/module10'

export const makeBoletoValidator = (): BoletoValidator => {
  return new BoletoValidator(
    new CalculateDate(),
    new CalculateAmount(),
    new DigitVerification(new Module10()),
    new ConvertToBarCode()
  )
}
