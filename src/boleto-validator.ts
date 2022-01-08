import { ICalculateAmount } from './calculate-amount'
import { ICalculateDate } from './calculate-digitable-line-date'

type IBoletoValidator = {
  validate: (digitableLine: string) => any
}

export class BoletoValidator implements IBoletoValidator {
  bankTitleLength = 47

  constructor (
    private readonly calculateDate: ICalculateDate,
    private readonly calculateAmount: ICalculateAmount
  ) {}

  validate (digitableLine: string): any {
    const isValid = digitableLine.match(/^[0-9]+$/)
    if (!isValid || digitableLine.length !== this.bankTitleLength) return false

    // TODO: extrair o substring pra uma função que extraia cada parte do code e retorna em um objeto
    const expirationDate = this.calculateDate
      .calculate(digitableLine.substring(33, 37)) // começa do 33 e acaba no 37 pra pegar o date

    const amount = this.calculateAmount
      .calculate(digitableLine.substring(37, 47)) // começa do 37 e termina no 47 pra pegar o valor

    return {
      statusCode: 200,
      data: {
        amount,
        expirationDate
      }
    }
  }
}
