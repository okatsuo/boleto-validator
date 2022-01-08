import { BoletoArrecadacao } from '../../operations/boleto-arrecadacao'
import { ConvertBoletoArrecadacaoToBarCode } from '../../operations/boleto-arrecadacao/converto-to-bar-code'

export const makeBoletoArrecadacao = (): BoletoArrecadacao => {
  const convertToBarCode = new ConvertBoletoArrecadacaoToBarCode()
  return new BoletoArrecadacao(convertToBarCode)
}
