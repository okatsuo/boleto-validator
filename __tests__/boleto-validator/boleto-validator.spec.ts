// import { Request } from 'express'
// import { BoletoValidator } from '../../src/boleto-validator/boleto-validator'
// import { ICalculateAmount } from '../../src/boleto-validator/calculate-amount'
// import { ICalculateDate } from '../../src/boleto-validator/calculate-digitable-line-date'

// const makeCalculateDateStub = (): ICalculateDate => {
//   class CalculateDateStub implements ICalculateDate {
//     calculate (value: string): string {
//       return 'valid_date'
//     }
//   }

//   return new CalculateDateStub()
// }

// const makeCalculateAmountStub = (): ICalculateAmount => {
//   class CalculateAmountStub implements ICalculateAmount {
//     calculate (value: string): string {
//       return 'valid_amount'
//     }
//   }

//   return new CalculateAmountStub()
// }

// type SutType = {
//   calculateDateStub: ICalculateDate
//   calculateAmountStub: ICalculateAmount
//   sut: BoletoValidator
// }

// const makeSut = (): SutType => {
//   const calculateDateStub = makeCalculateDateStub()
//   const calculateAmountStub = makeCalculateAmountStub()
//   const sut = new BoletoValidator(calculateDateStub, calculateAmountStub)

//   return {
//     calculateDateStub,
//     calculateAmountStub,
//     sut
//   }
// }

describe('Boleto validator', () => {
  it('should return false if digitableLine isnt only numbers', () => {
    // const { sut } = makeSut()
    // expect(sut.validate('invalid_digitable_line')).toBe(false)
    // expect(sut.validate('A3399340858500000011842498201013388610000065930')).toBe(false)
    // expect(sut.validate('0339934085850000001184249820101338861000006593A')).toBe(false)
    // expect(sut.validate('03399.34085850000001.18424982010133.8861000006.5930')).toBe(false)
    // expect(sut.validate('03399-340858500000011-842498201013388610000065-930')).toBe(false)
  })

  it('should return false if digitableLine isnt exactly 47 caracteres long', () => {
    // const { sut } = makeSut()
    // expect(sut.validate('212900011921100012109044756174059758700000021')).toBe(false)
    // expect(sut.validate('033993408585000000118424982010133886100000659301')).toBe(false)
  })
})
