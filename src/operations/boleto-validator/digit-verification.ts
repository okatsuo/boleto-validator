import { IModule10 } from '../../domain/useCases/module10'

export type IDigitVerification = {
  validate: (completeDigitableLine: string) => boolean
}

export class DigitVerification implements IDigitVerification {
  constructor (private readonly module10: IModule10) {}

  validate = (completeDigitableLine: string): boolean => {
    const blocksToValidateDv = [
      {
        num: completeDigitableLine.substring(0, 9),
        DV: completeDigitableLine.substring(9, 10)
      },
      {
        num: completeDigitableLine.substring(10, 20),
        DV: completeDigitableLine.substring(20, 21)
      },
      {
        num: completeDigitableLine.substring(21, 31),
        DV: completeDigitableLine.substring(31, 32)
      }
    ]

    const isValidDvs = blocksToValidateDv
      .every((block) => this.module10.calculate(block.num) === block.DV)

    return isValidDvs
  }
}
