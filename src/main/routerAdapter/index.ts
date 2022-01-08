import { Request, Response } from 'express'
import { IService } from '../../service/protocols/service'

export const routerAdapter = (service: IService) => {
  return (req: Request, res: Response) => {
    const httpResponse = service.handle(req)
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json({ data: httpResponse.data })
    } else {
      res.status(httpResponse.statusCode).json({ error: httpResponse.data.message })
    }
  }
}
