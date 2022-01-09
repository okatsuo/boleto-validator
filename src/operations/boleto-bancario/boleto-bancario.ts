import { IBoletoValidator } from '../../domain/useCases/boleto-validator'
import { ICalculateAmount } from '../../domain/useCases/calculate-amount'
import { ICalculateDate } from '../../domain/useCases/calculate-date'
import { IConvertToBarCode } from '../../domain/useCases/convert-to-bar-code'
import { IDigitVerification } from '../../domain/useCases/digit-verification'
import { badRequest, ok } from '../../service/helpers/http-errors'
import { IHttpResponse } from '../../service/protocols/httpResponse'
import { boletoError } from '../helper'

/* exemplos */
// 03399340858500000011842498201013388610000065930
// 21290001192110001210904475617405975870000002000
export class BoletoBancario implements IBoletoValidator {
  private readonly boletoFormat = /^[0-9]{47}$/
  constructor (
    private readonly calculateDate: ICalculateDate,
    private readonly calculateAmount: ICalculateAmount,
    private readonly digitVerification: IDigitVerification,
    private readonly codeBar: IConvertToBarCode
  ) {}

  handle = (digitableLine: string): IHttpResponse => {
    const isValidDigitableLine = this.boletoFormat.test(digitableLine)
    if (!isValidDigitableLine) {
      return badRequest(boletoError.invalidDigitableLine)
    }

    const isValidDv = this.digitVerification.validate(digitableLine)
    if (!isValidDv) {
      return badRequest(boletoError.invalidDigitVerification)
    }

    const barCode = this.codeBar.convert(digitableLine)

    const expirationDate = this.calculateDate
      .calculate(digitableLine.substring(33, 37))

    const amount = this.calculateAmount
      .calculate(digitableLine.substring(37, 47))

    return ok({
      barCode,
      amount,
      expirationDate
    })
  }
}
