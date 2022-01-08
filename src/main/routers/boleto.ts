import express from 'express'
import { BoletoService } from '../../service/boleto'
import { makeBoletoArrecadacao } from '../factories/boleto-arrecadacao'
import { makeBoletoValidator } from '../factories/boleto-validator'
import { routerAdapter } from '../routerAdapter'

export const boletoRouters = express.Router()

boletoRouters.get('/boleto/:digitableLine', routerAdapter(new BoletoService(makeBoletoValidator(), makeBoletoArrecadacao())))
