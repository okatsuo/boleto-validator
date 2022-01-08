import { CalculateDate } from '../../src/operations/boleto-validator/calculate-digitable-line-date'

type SutType = {
  sut: CalculateDate
}

const makeSut = (): SutType => {
  const sut = new CalculateDate()
  return { sut }
}

describe('Calculate date', () => {
  it('should return with correct date', () => {
    const { sut } = makeSut()
    expect(sut.calculate('8861')).toBe('2022-01-10')
  })
})
