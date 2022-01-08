import { Request, Response } from 'express'
import { appConfig } from '../config'

const link = `http://localhost:${appConfig.port}/boleto/21290001192110001210904475617405975870000002000`

export const routeExample = (req: Request, res: Response): Response => res.send(`
<div style="text-align: center">
  <h2>Única rota disponível: /boleto/< linha digitável ></h2>
  <br />
  exemplo: <a href='${link}' target='_blank'>${link}</a>
</div>
`)
