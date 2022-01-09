import express from 'express'
import { BoletoService } from '../../service/boleto'
import { makeBoletoValidator, makeBoletoArrecadacao } from '../factories'
import { routerAdapter } from '../routerAdapter'

export const boletoRouters = express.Router()

boletoRouters.get('/boleto/:digitableLine', routerAdapter(new BoletoService(makeBoletoValidator(), makeBoletoArrecadacao())))
