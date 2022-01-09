import { BoletoArrecadacao } from '../../operations/boleto-arrecadacao'
import { ConvertBoletoArrecadacaoToBarCode } from '../../operations/boleto-arrecadacao/converto-to-bar-code'
import { ArrecadacaoDigitVerification } from '../../operations/boleto-arrecadacao/digit-verification'

export const makeBoletoArrecadacao = (): BoletoArrecadacao => {
  const convertToBarCode = new ConvertBoletoArrecadacaoToBarCode()
  const digitVerification = new ArrecadacaoDigitVerification()
  return new BoletoArrecadacao(convertToBarCode, digitVerification)
}
