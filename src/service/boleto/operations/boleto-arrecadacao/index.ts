import { ok } from '../../../helpers/http-errors'
import { IHttpResponse } from '../../../protocols/httpResponse'

export class BoletoArrecadacao {
  handle = (digitableLine: string): IHttpResponse => {
    return ok({
      amount: 500,
      expirationDate: '2022-1-10',
      codeBar: 'valid_codebar'
    })
  }
}
