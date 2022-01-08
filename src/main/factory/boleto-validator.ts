import { BoletoValidator } from '../../operations/boleto-validator/boleto-validator'
import { CalculateAmount } from '../../operations/boleto-validator/calculate-amount'
import { CalculateDate } from '../../operations/boleto-validator/calculate-digitable-line-date'
import { ConvertToBarCode } from '../../operations/boleto-validator/convert-to-bar-code'
import { DigitVerification } from '../../operations/boleto-validator/digit-verification'
import { Module10 } from '../../operations/boleto-validator/module10'

export const makeBoletoValidator = (): BoletoValidator => {
  return new BoletoValidator(
    new CalculateDate(),
    new CalculateAmount(),
    new DigitVerification(new Module10()),
    new ConvertToBarCode()
  )
}
