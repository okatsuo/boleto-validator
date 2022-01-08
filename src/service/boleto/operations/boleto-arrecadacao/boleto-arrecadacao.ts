import { IConvertToBarCode } from '../../../../domain/useCases/IConvertToBarCode'
import { ok } from '../../../helpers/http-errors'
import { IHttpResponse } from '../../../protocols/httpResponse'

export class BoletoArrecadacao {
  constructor (private readonly convertToBarCode: IConvertToBarCode
  ) {
  }

  handle = (digitableLine: string): IHttpResponse => {
    const barCode = this.convertToBarCode.convert(digitableLine)

    return ok({
      barCode,
      amount: 500,
      expirationDate: '2022-1-10'
    })
  }
}
