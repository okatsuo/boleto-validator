import { BoletoValidator } from '../../service/boleto/operations/boleto-validator/boleto-validator'
import { CalculateAmount } from '../../service/boleto/operations/boleto-validator/calculate-amount'
import { CalculateDate } from '../../service/boleto/operations/boleto-validator/calculate-digitable-line-date'
import { ConvertToBarCode } from '../../service/boleto/operations/boleto-validator/convert-to-bar-code'
import { DigitVerification } from '../../service/boleto/operations/boleto-validator/digit-verification'
import { Module10 } from '../../service/boleto/operations/boleto-validator/module10'

export const makeBoletoValidator = (): BoletoValidator => {
  return new BoletoValidator(
    new CalculateDate(),
    new CalculateAmount(),
    new DigitVerification(new Module10()),
    new ConvertToBarCode()
  )
}
