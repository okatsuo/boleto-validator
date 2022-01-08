export type iCalculateDigitableLineDate = {
  calculate: (value: string) => string
}

export class CalculateDigitableLineDate {
  calculate (value: string): string {
    console.log('value:', value)
    const date = new Date('10/07/1997')
    return new Date(date.setTime(date.getTime() + (Number(value) * 24 * 60 * 60 * 1000))).toLocaleString().split(' ')[0]
  }
}
