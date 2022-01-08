import { Module10 } from '../../src/boleto-validator/module10'

type SutType = {
  sut: Module10
}

const makeSut = (): SutType => {
  const sut = new Module10()
  return { sut }
}

describe('Module 10', () => {
  it('should return 5', () => {
    const { sut } = makeSut()
    expect(sut.calculate('033993408')).toBe('5')
  })

  it('should return 9', () => {
    const { sut } = makeSut()
    expect(sut.calculate('212900011')).toBe('9')
  })

  it('should throw if calculate has the wrong lenght', () => {
    const { sut } = makeSut()
    expect(() => sut.calculate('')).toThrow('the string must have 9 characters long')
    expect(() => sut.calculate('12345678')).toThrow('the string must have 9 characters long')
    expect(() => sut.calculate('1234567890')).toThrow('the string must have 9 characters long')
  })

  it('should return a string', () => {
    const { sut } = makeSut()
    expect(sut.calculate('212900011')).toEqual(expect.any(String))
  })
})
