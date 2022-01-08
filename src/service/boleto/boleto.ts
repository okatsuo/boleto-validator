import { Request } from 'express'
import { IBoletoValidator } from './operations/boleto-validator/boleto-validator'
import { badRequest, ok } from '../helpers/http-errors'
import { IHttpResponse } from '../protocols/httpResponse'
import { IService } from '../protocols/service'

export class BoletoService implements IService {
  private readonly boletoBancarioLength = 47
  private readonly boletoArrecadacaoLength = 48
  private readonly boletoArrecadacaoInitialNumber = '8'

  constructor (private readonly boletoBancario: IBoletoValidator) {}

  handle = (req: Request): IHttpResponse => {
    const { digitableLine } = req.params

    if (digitableLine.length === this.boletoBancarioLength) {
      return this.boletoBancario.handle(digitableLine)
    } else if (
      digitableLine.length === this.boletoArrecadacaoLength &&
       digitableLine[0] === this.boletoArrecadacaoInitialNumber
    ) {
      return ok('boleto de arrecadação')
    }

    return badRequest('Linha digitável inválida')
  }
}
