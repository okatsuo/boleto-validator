export class ArrecadacaoModule11 {
  private readonly module11 = 11

  calculate = (value: string): string => {
    const code = value.split('').reverse()

    let multiplier = 2

    const summation = code.reduce((acc, current) => {
      const sum = Number(current) * multiplier
      multiplier = multiplier === 9 ? 2 : multiplier + 1
      return acc + sum
    }, 0)

    const rest = summation % this.module11

    if (rest === 0 || rest === 1) {
      return '0'
    }
    if (rest === 10) {
      return '1'
    }
    const DV = this.module11 - rest
    return DV.toString()
  }
}
