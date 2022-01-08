export type ICalculateAmount = {
  calculate: (value: string) => string
}

export class CalculateAmount {
  calculate = (value: string): string => {
    const amount = value.split('')
    const cents = amount.splice(amount.length - 2, 2)
    const amountToNumber = parseFloat(`${amount.join('')}.${cents.join('')}`)

    return amountToNumber.toFixed(2)
  }
}
