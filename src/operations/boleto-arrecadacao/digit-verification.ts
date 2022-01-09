import { IModuleCalculation } from '../../domain/useCases'

export class ArrecadacaoDigitVerification {
  constructor (
    private readonly module10: IModuleCalculation,
    private readonly arrecadacaoModule11: IModuleCalculation
  ) {
  }

  validate (barCode: string): boolean {
    const coinCode = Number(barCode[2])
    const DV = barCode[3]
    const block = barCode.substring(0, 3) + barCode.substring(4)
    let moduleResult: string

    switch (coinCode) {
      case 6:
      case 7:
        moduleResult = this.module10.calculate(block)
        break

      case 8:
      case 9:
        moduleResult = this.arrecadacaoModule11.calculate(block)
        break

      default:
        return false
    }

    return moduleResult === DV
  }
}
