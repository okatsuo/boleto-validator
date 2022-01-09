export class ArrecadacaoModule11 {
  private readonly module11 = 11
  private multiplier = 2

  calculate = (value: string): string => {
    const code = value.split('').reverse()

    const summation = code.reduce((acc, current) => {
      const sum = Number(current) * this.multiplier
      this.multiplier = this.multiplier === 9 ? 2 : this.multiplier + 1
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
