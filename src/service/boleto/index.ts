import { Request } from 'express'
import { IBoletoValidator } from '../../boleto-validator/boleto-validator'
import { badRequest, ok } from '../helpers/http-errors'
import { IHttpResponse } from '../protocols/httpResponse'
import { IService } from '../protocols/service'

export class BoletoService implements IService {
  constructor (private readonly boletoBancario: IBoletoValidator) {}

  handle = (req: Request): IHttpResponse => {
    const { digitableLine } = req.params

    if (digitableLine.length === 47) {
      return this.boletoBancario.handle(digitableLine)
    } else if (digitableLine.length === 48 && digitableLine[0] === '8') {
      return ok('boleto de arrecadação')
    }

    return badRequest('Linha digitável inválida')
  }
}
