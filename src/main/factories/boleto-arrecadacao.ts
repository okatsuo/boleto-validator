import {
  BoletoArrecadacao,
  ConvertBoletoArrecadacaoToBarCode,
  ArrecadacaoDigitVerification
} from '../../operations/boleto-arrecadacao'

export const makeBoletoArrecadacao = (): BoletoArrecadacao => {
  const convertToBarCode = new ConvertBoletoArrecadacaoToBarCode()
  const digitVerification = new ArrecadacaoDigitVerification()
  return new BoletoArrecadacao(convertToBarCode, digitVerification)
}
