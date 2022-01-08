import { Request } from 'express'
import { IHttpResponse } from '../httpResponse'

export type IService = {
  handle: (req: Request) => IHttpResponse
}
