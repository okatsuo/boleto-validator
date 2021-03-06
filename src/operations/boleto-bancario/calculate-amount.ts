import { ICalculateAmount } from '../../domain/useCases/calculate-amount'

export class BancarioCalculateAmount implements ICalculateAmount {
  private readonly requiredAmountLenght = 10
  calculate = (value: string): string => {
    if (value.length !== this.requiredAmountLenght) throw new Error('Amount must have 10 characters long')

    const amount = value.split('')
    const cents = amount.splice(amount.length - 2, 2)
    const amountToNumber = parseFloat(`${amount.join('')}.${cents.join('')}`)

    return amountToNumber.toFixed(2)
  }
}
