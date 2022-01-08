import express from 'express'
import { makeBoletoValidator } from '../factory/boleto-validator'

export const boletoRouters = express.Router()

boletoRouters.get('/boleto/:digitableLine', makeBoletoValidator().validate)
