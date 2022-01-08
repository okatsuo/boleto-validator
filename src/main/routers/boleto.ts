import express from 'express'
import { makeBoletoService } from '../factories/boleto-service'
import { routerAdapter } from '../routerAdapter'

export const boletoRouters = express.Router()

boletoRouters.get('/boleto/:digitableLine', routerAdapter(makeBoletoService()))
