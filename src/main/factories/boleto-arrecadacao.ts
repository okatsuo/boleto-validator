import {
  BoletoArrecadacao,
  ConvertBoletoArrecadacaoToBarCode,
  ArrecadacaoDigitVerification
} from '../../operations/boleto-arrecadacao'
import { Module10 } from '../../operations/shared'

export const makeBoletoArrecadacao = (): BoletoArrecadacao => {
  const convertToBarCode = new ConvertBoletoArrecadacaoToBarCode()
  const module10 = new Module10()
  const digitVerification = new ArrecadacaoDigitVerification(module10)
  return new BoletoArrecadacao(convertToBarCode, digitVerification)
}
