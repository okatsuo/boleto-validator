import { IHttpResponse } from '../protocols/httpResponse'

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  data
})

export const badRequest = (message: string): IHttpResponse => ({
  statusCode: 400,
  data: new Error(message)
})
