import { makeBoletoValidator, makeBoletoArrecadacao } from '.'
import { BoletoService } from '../../service/boleto'

export const makeBoletoService = (): BoletoService => {
  return new BoletoService(makeBoletoValidator(), makeBoletoArrecadacao())
}
