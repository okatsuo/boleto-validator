import { CalculateAmount } from '../../src/operations/boleto-validator'

type SutType = {
  sut: CalculateAmount
}

const makeSut = (): SutType => {
  const sut = new CalculateAmount()
  return { sut }
}

describe('Calculate amount', () => {
  it('should set to fixed 2 the last 2 numbers', () => {
    const { sut } = makeSut()
    const amount = sut.calculate('0000099960')
    const isValidlastTwoDigits = amount.endsWith('.60')
    expect(isValidlastTwoDigits).toBe(true)
  })

  it('should return with correct value', () => {
    const { sut } = makeSut()
    const amount = sut.calculate('3300099960')
    expect(amount).toBe('33000999.60')
  })

  it('should return a string', () => {
    const { sut } = makeSut()
    const amount = sut.calculate('0000099960')
    expect(amount).toEqual(expect.any(String))
  })

  it('should throw if the amount is not 10 characterss long', () => {
    const { sut } = makeSut()
    expect(() => {
      sut.calculate('123456789')
    }).toThrow('Amount must have 10 characters long')
    expect(() => {
      sut.calculate('12345678900')
    }).toThrow('Amount must have 10 characters long')
  })
})
