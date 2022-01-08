import { IHttpResponse } from '../../service/protocols/httpResponse'

export type IBoletoValidator = {
  handle: (digitableLine: string) => IHttpResponse
}
