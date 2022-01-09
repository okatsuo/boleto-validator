import {
  BoletoArrecadacao,
  ConvertBoletoArrecadacaoToBarCode,
  ArrecadacaoDigitVerification
} from '../../operations/boleto-arrecadacao'
import { ArrecadacaoModule11 } from '../../operations/boleto-arrecadacao/module11'
import { Module10 } from '../../operations/shared'

export const makeBoletoArrecadacao = (): BoletoArrecadacao => {
  const convertToBarCode = new ConvertBoletoArrecadacaoToBarCode()
  const module10 = new Module10()
  const arrecadacaoModule11 = new ArrecadacaoModule11()
  const digitVerification = new ArrecadacaoDigitVerification(module10, arrecadacaoModule11)
  return new BoletoArrecadacao(convertToBarCode, digitVerification)
}
