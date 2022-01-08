import { Request, Response } from 'express'
import { ICalculateAmount } from './calculate-amount'
import { ICalculateDate } from './calculate-digitable-line-date'
import { IConvertToBarCode } from './convert-to-bar-code'
import { IDigitVerification } from './digit-verification'

type IBoletoValidator = {
  validate: (request: Request, response: Response) => Response
}

export class BoletoValidator implements IBoletoValidator {
  private readonly boletoFormat = /^[0-9]{47}$/
  constructor (
    private readonly calculateDate: ICalculateDate,
    private readonly calculateAmount: ICalculateAmount,
    private readonly digitVerification: IDigitVerification,
    private readonly codeBar: IConvertToBarCode
  ) {}

  validate = (req: Request, res: Response): Response => {
    const { digitableLine } = req.params

    if (!digitableLine) return res.send(false)

    const isValidFormat = this.boletoFormat.test(digitableLine)
    if (!isValidFormat) return res.send(false)

    const isValidDv = this.digitVerification.validate(digitableLine)
    if (!isValidDv) return res.send(false)

    const codeBar = this.codeBar.convert(digitableLine)

    const expirationDate = this.calculateDate
      .calculate(digitableLine.substring(33, 37))

    const amount = this.calculateAmount
      .calculate(digitableLine.substring(37, 47))

    return res.json({
      statusCode: 200,
      data: {
        codeBar,
        amount,
        expirationDate
      }
    })
  }
}

// 03399340858500000011842498201013388610000065930
// 21290001192110001210904475617405975870000002000