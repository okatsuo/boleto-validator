import {
  BoletoBancario,
  BancarioCalculateDate,
  BancarioCalculateAmount,
  BancarioDigitVerification,
  BancarioConvertToBarCode
} from '../../operations/boleto-bancario'
import { Module10 } from '../../operations/shared'

export const makeBoletoValidator = (): BoletoBancario => {
  return new BoletoBancario(
    new BancarioCalculateDate(),
    new BancarioCalculateAmount(),
    new BancarioDigitVerification(new Module10()),
    new BancarioConvertToBarCode()
  )
}
