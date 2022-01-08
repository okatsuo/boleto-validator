export type IModule10 = {
  calculate: (value: string) => string
}

export class Module10 implements IModule10 {
  calculate (value: string): string {
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
