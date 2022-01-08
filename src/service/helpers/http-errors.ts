import { IHttpResponse } from '../protocols/httpResponse'

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  data
})

export const badRequest = (message: string): IHttpResponse => ({
  statusCode: 400,
  data: new Error(message)
})

export const serverError = (): IHttpResponse => ({
  statusCode: 500,
  data: new Error('Erro interno no servidor')
})
