export type ICalculateDigitableLineDate = {
  calculate: (value: string) => string
}

export class CalculateDigitableLineDate implements ICalculateDigitableLineDate {
  calculate (value: string): string {
    const date = new Date('10/07/1997')
    return new Date(date.setTime(date.getTime() + (Number(value) * 24 * 60 * 60 * 1000))).toLocaleString().split(' ')[0]
  }
}
