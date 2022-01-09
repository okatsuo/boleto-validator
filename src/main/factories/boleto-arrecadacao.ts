import {
  BoletoArrecadacao,
  ConvertBoletoArrecadacaoToBarCode,
  ArrecadacaoDigitVerification
} from '../../operations/boleto-arrecadacao'
import { ArrecadacaoCalculateDate } from '../../operations/boleto-arrecadacao/calculate-date'
import { ArrecadacaoModule11 } from '../../operations/boleto-arrecadacao/module11'
import { Module10 } from '../../operations/shared'

export const makeBoletoArrecadacao = (): BoletoArrecadacao => {
  const convertToBarCode = new ConvertBoletoArrecadacaoToBarCode()
  const module10 = new Module10()
  const arrecadacaoModule11 = new ArrecadacaoModule11()
  const digitVerification = new ArrecadacaoDigitVerification(module10, arrecadacaoModule11)
  const calculateDate = new ArrecadacaoCalculateDate()
  return new BoletoArrecadacao(convertToBarCode, digitVerification, calculateDate)
}
