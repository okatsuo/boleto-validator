import { IModule10 } from '../../domain/useCases'

export class ArrecadacaoDigitVerification {
  private readonly numbersToModule10 = [6, 7]
  private readonly numbersToModule11 = [8, 9]

  constructor (
    private readonly module10: IModule10,
    private readonly arrecadacaoModule11: IModule10
  ) {
  }

  validate (barCode: string): boolean {
    const coinCode = Number(barCode[2])
    const DV = barCode[3]
    const block = barCode.substring(0, 3) + barCode.substring(4)

    let moduleResult
    if (this.numbersToModule10.includes(coinCode)) {
      moduleResult = this.module10.calculate(block)
    } else if (this.numbersToModule11.includes(coinCode)) {
      moduleResult = this.arrecadacaoModule11.calculate(block)
    } else {
      return false
    }

    return moduleResult === DV
  }
}
