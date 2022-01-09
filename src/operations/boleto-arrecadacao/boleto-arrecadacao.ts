import { IDigitVerification } from '../../domain/useCases'
import { IConvertToBarCode } from '../../domain/useCases/convert-to-bar-code'
import { badRequest, ok } from '../../service/helpers/http-errors'
import { IHttpResponse } from '../../service/protocols/httpResponse'
import { boletoError } from '../helper'

export class BoletoArrecadacao {
  constructor (private readonly convertToBarCode: IConvertToBarCode,
    private readonly digitVerification: IDigitVerification
  ) {
  }

  handle = (digitableLine: string): IHttpResponse => {
    const barCode = this.convertToBarCode.convert(digitableLine)
    const isValidDigitVerification = this.digitVerification.validate(barCode)
    if (!isValidDigitVerification) {
      return badRequest(boletoError.invalidDigitVerification)
    }

    return ok({
      barCode,
      amount: 500,
      expirationDate: '2022-1-10'
    })
  }
}
