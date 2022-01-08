export type IModule10 = {
  calculate: (value: string) => string
}

export class Module10 implements IModule10 {
  private readonly requiredLenght = 9
  calculate = (value: string): string => {
    if (!value || value.length !== this.requiredLenght) {
      throw new Error('the string must have 9 characters long')
    }

    const code = value.split('').reverse()

    const summation = code.reduce((acc, current, index) => {
      let sum = Number(current) * (((index + 1) % 2) + 1)
      sum = (sum > 9 ? Math.trunc(sum / 10) + (sum % 10) : sum)
      return acc + sum
    }, 0)

    const result = (Math.ceil(summation / 10) * 10) - summation
    return result.toString()
  }
}
