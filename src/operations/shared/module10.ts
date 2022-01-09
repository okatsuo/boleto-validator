import { IModuleCalculation } from '../../domain/useCases/module-calculation'

export class Module10 implements IModuleCalculation {
  private readonly isBiggerThanOneDigit = (value: number): boolean => {
    return value > 9
  }

  calculate = (value: string): string => {
    const code = value.split('').reverse()

    const summation = code.reduce((acc, current, index) => {
      let sum = Number(current) * (((index + 1) % 2) + 1)
      if (this.isBiggerThanOneDigit(sum)) sum = Math.trunc(sum / 10) + (sum % 10)
      return acc + sum
    }, 0)

    const result = ((Math.ceil(summation / 10) * 10) - summation).toString()
    return result
  }
}
