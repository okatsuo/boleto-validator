import { BoletoValidator } from '../../boleto-validator'
import { CalculateAmount } from '../../calculate-amount'
import { CalculateDate } from '../../calculate-digitable-line-date'
import { ConvertToBarCode } from '../../convert-to-bar-code'
import { DigitVerification } from '../../digit-verification'
import { Module10 } from '../../module10'

const makeBoletoValidator = (): BoletoValidator => {
  const calculateDate = new CalculateDate()
  const calculateAmount = new CalculateAmount()
  const module10 = new Module10()
  const digitVerification = new DigitVerification(module10)
  const convertToBarCode = new ConvertToBarCode()
  return new BoletoValidator(calculateDate, calculateAmount, digitVerification, convertToBarCode)
}

export const boletoValidator = makeBoletoValidator()
